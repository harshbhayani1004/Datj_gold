import { ArrowRight, Check, ChevronDown, ChevronRight, Heart, MapPin, Minus, Plus, RefreshCcw, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import JewelleryCard from '../../components/ui/JewelleryCard';
import { findProduct, formatPrice, products } from '../../data/catalog';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const sizes = ['6', '7', '8', '9', '10', '11', '12', '13'];

export default function ProductRedesign() {
  const { id } = useParams();
  const product = findProduct(id);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated, openAuthModal } = useAuth();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState(0);
  const [metal, setMetal] = useState(product.metal);
  const [size, setSize] = useState('10');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [deliveryMessage, setDeliveryMessage] = useState('');
  const [openDetail, setOpenDetail] = useState('details');
  const saved = isInWishlist(product.id);

  useEffect(() => {
    setActiveImage(0);
    setMetal(product.metal);
    window.scrollTo(0, 0);
  }, [product]);

  const addProduct = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      variant: { color: metal, material: `${product.purity} Gold`, size },
      quantity,
    });
  };

  const buyNow = () => {
    addProduct();
    if (isAuthenticated) navigate('/cart');
    else openAuthModal();
  };

  const checkPincode = () => {
    setDeliveryMessage(pincode.length === 6 ? 'Delivery available in 5–7 working days' : 'Enter a valid 6-digit pincode');
  };

  const related = products.filter((item) => item.id !== product.id && (item.slug === product.slug || item.metal === product.metal)).slice(0, 4);

  return (
    <div className="bg-[#f5f2ea] text-[#1c2b36]">
      <div className="mx-auto max-w-[1500px] px-5 pb-4 pt-5 md:px-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 overflow-hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b858a]">
          <Link to="/">Home</Link><ChevronRight className="h-3 w-3" /><Link to={`/collection/${product.slug}`}>{product.category}</Link><ChevronRight className="h-3 w-3" /><span className="truncate text-[#18384e]">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-5 pb-20 md:px-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
        <div className="grid gap-4 md:grid-cols-[84px_1fr]">
          <div className="product-scroll order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
            {product.gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-sm border-2 bg-white transition ${activeImage === index ? 'border-[#18384e]' : 'border-transparent'}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden rounded-md bg-[#e7e4dc] md:order-2">
            <img src={product.gallery[activeImage]} alt={product.name} className="h-full w-full object-cover transition duration-500" />
          </div>
        </div>

        <div className="lg:pt-5">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {product.badge && <span className="rounded-full bg-[#e7ebe3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#506c63]">{product.badge}</span>}
            <span className="flex items-center gap-1 text-xs text-[#6f7a80]"><Star className="h-3.5 w-3.5 fill-[#a4864f] text-[#a4864f]" /> {product.rating} · {product.reviews} reviews</span>
          </div>
          <h1 className="font-serif text-5xl leading-[.95] md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-sm leading-7 text-[#66747c]">{product.description}</p>

          <div className="mt-7 flex flex-wrap items-end gap-3 border-b border-[#18384e]/10 pb-7">
            <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="pb-0.5 text-sm text-[#8b9498] line-through">{formatPrice(product.originalPrice)}</span>}
            <span className="pb-0.5 text-xs text-[#6f7a80]">Inclusive of all taxes</span>
          </div>

          <div className="space-y-7 py-7">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-[11px] font-semibold uppercase tracking-[0.16em]">Gold colour <span className="ml-2 normal-case tracking-normal text-[#6f7a80]">{metal}</span></label>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Yellow Gold', 'White Gold', 'Rose Gold'].map((option) => (
                  <button type="button" key={option} onClick={() => setMetal(option as typeof metal)} className={`rounded-full border px-5 py-3 text-xs transition ${metal === option ? 'border-[#18384e] bg-[#18384e] text-white' : 'border-[#18384e]/15 bg-white hover:border-[#18384e]/45'}`}>{option}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="product-size" className="text-[11px] font-semibold uppercase tracking-[0.16em]">Size</label>
                <button type="button" className="text-xs text-[#506c63] underline underline-offset-4">Size guide</button>
              </div>
              <label className="relative block">
                <select id="product-size" value={size} onChange={(event) => setSize(event.target.value)} className="w-full appearance-none rounded-sm border border-[#18384e]/15 bg-white px-5 py-4 text-sm outline-none focus:border-[#18384e]">
                  {sizes.map((option) => <option key={option} value={option}>India size {option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2" />
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex shrink-0 items-center rounded-full border border-[#18384e]/15 bg-white">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4"><Minus className="h-4 w-4" /></button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="p-4"><Plus className="h-4 w-4" /></button>
            </div>
            <button type="button" onClick={addProduct} className="lux-button flex-1 justify-center">Add to bag</button>
            <button
              type="button"
              aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
              onClick={() => toggleWishlist({ id: product.id, name: product.name, price: formatPrice(product.price), category: product.category, image: product.image, sale: Boolean(product.originalPrice) })}
              className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border transition ${saved ? 'border-[#18384e] bg-[#18384e] text-white' : 'border-[#18384e]/15 bg-white'}`}
            >
              <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
            </button>
          </div>
          <button type="button" onClick={buyNow} className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#18384e] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#18384e] transition hover:bg-[#18384e] hover:text-white">
            Buy now <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-7 rounded-sm bg-[#e7ebe3] p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#506c63]" />
              <label htmlFor="pincode" className="sr-only">Delivery pincode</label>
              <input id="pincode" value={pincode} onChange={(event) => setPincode(event.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="Enter delivery pincode" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#6f7a80]" />
              <button type="button" onClick={checkPincode} className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#18384e]">Check</button>
            </div>
            {deliveryMessage && <p className="mt-3 pl-8 text-xs text-[#63717a]">{deliveryMessage}</p>}
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#63717a]">
            <div className="rounded-sm border border-[#18384e]/10 bg-white p-4"><ShieldCheck className="mx-auto mb-2 h-5 w-5 text-[#a4864f]" />Certified</div>
            <div className="rounded-sm border border-[#18384e]/10 bg-white p-4"><Truck className="mx-auto mb-2 h-5 w-5 text-[#a4864f]" />Insured</div>
            <div className="rounded-sm border border-[#18384e]/10 bg-white p-4"><RefreshCcw className="mx-auto mb-2 h-5 w-5 text-[#a4864f]" />Exchange</div>
          </div>

          <div className="mt-9 border-t border-[#18384e]/10">
            {[
              { id: 'details', title: 'Product details', body: <ul className="space-y-3">{product.details.map((detail) => <li key={detail} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#a4864f]" />{detail}</li>)}</ul> },
              { id: 'price', title: 'Price & purity', body: <p>Pricing reflects gold weight, stone value and craftsmanship. Your final invoice includes a transparent breakup and purity certificate.</p> },
              { id: 'care', title: 'Care & service', body: <p>Store separately, avoid fragrance and moisture, and book complimentary annual cleaning with our jewellery concierge.</p> },
            ].map((item) => (
              <div key={item.id} className="border-b border-[#18384e]/10">
                <button type="button" onClick={() => setOpenDetail(openDetail === item.id ? '' : item.id)} className="flex w-full items-center justify-between py-5 text-left font-serif text-xl">
                  {item.title}<ChevronDown className={`h-4 w-4 transition ${openDetail === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openDetail === item.id && <div className="pb-6 text-sm leading-7 text-[#66747c]">{item.body}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1b2a] px-5 py-16 text-white md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-8 text-center md:grid-cols-3">
          <div><Sparkles className="mx-auto mb-4 h-6 w-6 text-[#c2aa78]" /><h3 className="font-serif text-2xl">Made by hand</h3><p className="mt-2 text-xs leading-6 text-white/50">Finished by master artisans in our Jaipur atelier.</p></div>
          <div><ShieldCheck className="mx-auto mb-4 h-6 w-6 text-[#c2aa78]" /><h3 className="font-serif text-2xl">Made with proof</h3><p className="mt-2 text-xs leading-6 text-white/50">Hallmark and stone certification included.</p></div>
          <div><RefreshCcw className="mx-auto mb-4 h-6 w-6 text-[#c2aa78]" /><h3 className="font-serif text-2xl">Made to last</h3><p className="mt-2 text-xs leading-6 text-white/50">Lifetime exchange and thoughtful aftercare.</p></div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div><p className="eyebrow">Complete the story</p><h2 className="display-title">You may also love</h2></div>
            <Link to={`/collection/${product.slug}`} className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#18384e] sm:flex">View collection <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">{related.map((item) => <JewelleryCard key={item.id} product={item} />)}</div>
        </div>
      </section>
    </div>
  );
}
