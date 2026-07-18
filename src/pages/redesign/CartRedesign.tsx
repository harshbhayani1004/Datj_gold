import { ArrowLeft, Lock, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/catalog';

export default function CartRedesign() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { isAuthenticated, openAuthModal } = useAuth();

  if (!cartItems.length) {
    return (
      <div className="flex min-h-[680px] items-center justify-center bg-[#f5f2ea] px-5 text-center">
        <div>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#e7ebe3] text-[#506c63]"><ShoppingBag className="h-7 w-7" /></div>
          <p className="eyebrow mt-8">Your jewellery box</p>
          <h1 className="font-serif text-5xl md:text-6xl">Nothing here—yet.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#66747c]">Discover pieces made for daily rituals, celebrations and everything you want to remember.</p>
          <Link to="/collection/featured" className="lux-button mt-8">Explore jewellery</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f2ea] px-5 py-14 text-[#1c2b36] md:px-10 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div><p className="eyebrow">Your selection</p><h1 className="font-serif text-5xl md:text-6xl">Shopping bag</h1></div>
          <Link to="/collection/featured" className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#18384e] sm:flex"><ArrowLeft className="h-4 w-4" /> Continue shopping</Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <article key={`${item.id}-${index}`} className="grid gap-5 rounded-md bg-white p-5 sm:grid-cols-[150px_1fr] md:p-6">
                <Link to={`/product/${item.id}`} className="aspect-square overflow-hidden rounded-[1.4rem] bg-[#e9e5dc]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </Link>
                <div className="flex min-w-0 flex-col justify-between py-1">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7b858a]">{item.variant.material}</p><Link to={`/product/${item.id}`} className="mt-1 block font-serif text-2xl">{item.name}</Link></div>
                      <p className="shrink-0 text-sm font-semibold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <p className="mt-3 text-xs text-[#66747c]">{item.variant.color} · Size {item.variant.size}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-[#18384e]/15">
                      <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))} className="p-3"><Minus className="h-3 w-3" /></button>
                      <span className="w-7 text-center text-xs">{item.quantity}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-3"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.id, item.variant)} className="flex items-center gap-2 text-xs text-[#7b858a] transition hover:text-[#506c63]"><Trash2 className="h-3.5 w-3.5" /> Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-md bg-[#0b1b2a] p-7 text-white lg:sticky lg:top-32 md:p-9">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c2aa78]">Order summary</p>
            <h2 className="font-serif text-3xl">Your total</h2>
            <div className="mt-8 space-y-4 border-y border-white/10 py-6 text-sm text-white/60">
              <div className="flex justify-between"><span>Subtotal</span><span className="text-white">{formatPrice(cartTotal)}</span></div>
              <div className="flex justify-between"><span>Insured delivery</span><span className="text-[#c2aa78]">Complimentary</span></div>
              <div className="flex justify-between"><span>GST</span><span>Included</span></div>
            </div>
            <div className="flex items-end justify-between py-7"><span className="font-serif text-2xl">Total</span><span className="text-xl font-semibold">{formatPrice(cartTotal)}</span></div>
            <button type="button" onClick={() => { if (!isAuthenticated) openAuthModal(); }} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f6f3ea] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#13293d] transition hover:bg-white">
              Secure checkout <Lock className="h-4 w-4" />
            </button>
            <div className="mt-7 space-y-3 text-xs text-white/45">
              <p className="flex items-center gap-3"><Truck className="h-4 w-4 text-[#c2aa78]" /> Fully insured delivery across India</p>
              <p className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-[#c2aa78]" /> Secure payments and certified jewellery</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
