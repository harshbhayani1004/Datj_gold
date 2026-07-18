import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { JewelleryProduct } from '../../data/catalog';
import { formatPrice } from '../../data/catalog';
import { useWishlist } from '../../context/WishlistContext';

export default function JewelleryCard({ product, dark = false }: { product: JewelleryProduct; dark?: boolean }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(product.id);

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#e9e5dc]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`} className="block h-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40" />
        </Link>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#18384e] backdrop-blur">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          onClick={() =>
            toggleWishlist({
              id: product.id,
              name: product.name,
              price: formatPrice(product.price),
              category: product.category,
              image: product.image,
              sale: Boolean(product.originalPrice),
            })
          }
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border transition ${
            saved
              ? 'border-[#18384e] bg-[#18384e] text-white'
              : 'border-white/70 bg-white/90 text-[#1c2b36] hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        <Link
          to={`/product/${product.id}`}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-between rounded-full bg-[#0b1b2a]/92 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="px-1 pt-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${dark ? 'text-white/50' : 'text-[#6f7a80]'}`}>
            {product.purity} {product.metal}
          </p>
          <span className={`text-xs ${dark ? 'text-[#c2aa78]' : 'text-[#6f7a80]'}`}>★ {product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className={`font-serif text-xl leading-tight transition ${dark ? 'text-white group-hover:text-[#c2aa78]' : 'text-[#1c2b36] group-hover:text-[#506c63]'}`}>
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className={`text-sm font-semibold ${dark ? 'text-white' : 'text-[#1c2b36]'}`}>{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className={`text-xs line-through ${dark ? 'text-white/35' : 'text-[#8b9498]'}`}>{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
