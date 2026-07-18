import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

export default function WishlistRedesign() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-[700px] bg-[#f5f2ea] text-[#1c2b36]">
      <section className="relative overflow-hidden bg-[#13293d] px-5 pb-16 pt-40 text-white md:px-10 md:pb-20">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#c2aa78]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d7c59a]">Saved for later</p>
          <h1 className="font-serif text-6xl md:text-8xl">Your wishlist</h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">A place for everything that caught your eye. Your favourites are saved on this device.</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          {!wishlist.length ? (
            <div className="rounded-md bg-white px-6 py-20 text-center">
              <Heart className="mx-auto h-12 w-12 text-[#c2aa78]" strokeWidth={1.2} />
              <h2 className="mt-7 font-serif text-4xl">Save what speaks to you.</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#66747c]">Tap the heart on any piece and it will be waiting here when you return.</p>
              <Link to="/collection/featured" className="lux-button mt-8">Explore the collection</Link>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between border-b border-[#18384e]/10 pb-5">
                <p className="text-sm text-[#66747c]"><strong className="text-[#1c2b36]">{wishlist.length}</strong> saved {wishlist.length === 1 ? 'piece' : 'pieces'}</p>
                <Link to="/collection/featured" className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#18384e]">Continue shopping</Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
                {wishlist.map((item) => (
                  <article key={item.id} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#e9e5dc]">
                      <Link to={`/product/${item.id}`} className="block h-full"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /></Link>
                      <button type="button" onClick={() => removeFromWishlist(item.id)} aria-label={`Remove ${item.name} from wishlist`} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#506c63]"><Trash2 className="h-4 w-4" /></button>
                      <Link to={`/product/${item.id}`} className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-[#0b1b2a]/92 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition group-hover:opacity-100"><ShoppingBag className="h-3.5 w-3.5" /> Choose options</Link>
                    </div>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b858a]">{item.category}</p>
                    <Link to={`/product/${item.id}`}><h2 className="mt-1 font-serif text-xl">{item.name}</h2></Link>
                    <p className="mt-2 text-sm font-semibold">{item.price}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
