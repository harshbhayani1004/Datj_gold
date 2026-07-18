import { useEffect, useState } from 'react';
import { Heart, LogOut, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const collectionLinks = [
  ['Rings', '/collection/rings'],
  ['Necklaces', '/collection/necklaces'],
  ['Earrings', '/collection/earrings'],
  ['Bangles', '/collection/bangles'],
  ['Bridal', '/collection/bridal-sets'],
  ['Gifts', '/collection/gifts'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout, openAuthModal } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const overlaysHero =
    location.pathname === '/' ||
    location.pathname.startsWith('/collection') ||
    location.pathname === '/wishlist' ||
    location.pathname === '/about';
  const transparent = overlaysHero && !scrolled;
  const foreground = transparent ? 'text-white' : 'text-[#1c2b36]';

  const Count = ({ value }: { value: number }) =>
    value > 0 ? (
      <span className="absolute -right-2 -top-2 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#a4864f] px-1 text-[9px] font-bold leading-none text-white">
        {value}
      </span>
    ) : null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70]">
        <div className="h-8 bg-[#0b1b2a] px-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
          <div className="mx-auto flex h-full max-w-[1500px] items-center justify-center sm:justify-between">
            <span>Complimentary insured delivery across India</span>
            <span className="hidden sm:block">BIS Hallmarked · Certified Diamonds · Lifetime Exchange</span>
          </div>
        </div>

        <nav
          aria-label="Primary navigation"
          className={`border-b transition duration-300 ${
            transparent
              ? 'border-white/15 bg-transparent'
              : 'border-[#18384e]/10 bg-[#f8f6f0]/95 shadow-[0_10px_35px_rgba(11,27,42,0.06)] backdrop-blur-xl'
          }`}
        >
          <div className="mx-auto grid h-[76px] max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
            <div className="flex items-center gap-3 xl:gap-5">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`grid h-10 w-10 place-items-center lg:hidden ${foreground}`}
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="hidden items-center gap-5 lg:flex">
                {collectionLinks.slice(0, 4).map(([label, to]) => (
                  <Link
                    key={label}
                    to={to}
                    className={`border-b border-transparent py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#a4864f] hover:text-[#a4864f] ${foreground}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/" className={`group text-center ${foreground}`} aria-label="Ruprays home">
              <span className="block font-serif text-[25px] font-semibold leading-none tracking-[0.2em]">RUPRAYS</span>
              <span className={`mt-1.5 block text-[7px] font-semibold uppercase tracking-[0.38em] ${transparent ? 'text-white/55' : 'text-[#6f7a80]'}`}>
                Fine Jewellery
              </span>
            </Link>

            <div className={`flex items-center justify-end gap-1 sm:gap-2 ${foreground}`}>
              <div className="mr-2 hidden items-center gap-5 lg:flex xl:mr-5">
                {collectionLinks.slice(4).map(([label, to]) => (
                  <Link
                    key={label}
                    to={to}
                    className="border-b border-transparent py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#a4864f] hover:text-[#a4864f]"
                  >
                    {label}
                  </Link>
                ))}
                <Link to="/about" className="border-b border-transparent py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#a4864f] hover:text-[#a4864f]">
                  Story
                </Link>
              </div>

              <Link to="/collection/featured" aria-label="Search collections" className="hidden h-10 w-10 place-items-center transition hover:text-[#a4864f] sm:grid">
                <Search className="h-[18px] w-[18px]" />
              </Link>
              {user ? (
                <button type="button" onClick={logout} aria-label="Sign out" title={`Signed in as ${user.name}`} className="hidden h-10 w-10 place-items-center transition hover:text-[#a4864f] sm:grid">
                  <LogOut className="h-[18px] w-[18px]" />
                </button>
              ) : (
                <button type="button" onClick={openAuthModal} aria-label="Sign in" className="hidden h-10 w-10 place-items-center transition hover:text-[#a4864f] sm:grid">
                  <User className="h-[18px] w-[18px]" />
                </button>
              )}
              <Link to="/wishlist" aria-label={`Wishlist with ${wishlistCount} items`} className="relative grid h-10 w-10 place-items-center transition hover:text-[#a4864f]">
                <Heart className="h-[18px] w-[18px]" />
                <Count value={wishlistCount} />
              </Link>
              <Link to="/cart" aria-label={`Shopping bag with ${cartCount} items`} className="relative grid h-10 w-10 place-items-center transition hover:text-[#a4864f]">
                <ShoppingBag className="h-[18px] w-[18px]" />
                <Count value={cartCount} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[90] transition ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={!mobileOpen}>
        <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-[#0b1b2a]/65 backdrop-blur-sm" />
        <aside className={`relative flex h-full w-[min(88vw,390px)] flex-col bg-[#f8f6f0] px-7 py-7 text-[#1c2b36] shadow-2xl transition duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-[#18384e]/10 pb-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">RUPRAYS</Link>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center border border-[#18384e]/15">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-7">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6f7a80]">Shop jewellery</p>
            <div className="divide-y divide-[#18384e]/10 border-y border-[#18384e]/10">
              {collectionLinks.map(([label, to]) => (
                <Link key={label} to={to} className="flex items-center justify-between py-4 font-serif text-2xl transition hover:text-[#506c63]">
                  {label}<span className="text-sm text-[#a4864f]">↗</span>
                </Link>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <Link to="/about" className="border border-[#18384e]/15 px-4 py-4">Our story</Link>
              <Link to="/contact" className="border border-[#18384e]/15 px-4 py-4">Concierge</Link>
              <Link to="/wishlist" className="border border-[#18384e]/15 px-4 py-4">Wishlist</Link>
              <Link to="/login" className="border border-[#18384e]/15 px-4 py-4">My account</Link>
            </div>
          </div>

          <div className="border-t border-[#18384e]/10 pt-5 text-xs leading-6 text-[#66747c]">
            <p>Need help choosing a piece?</p>
            <a href="tel:+919876543210" className="font-semibold text-[#18384e]">+91 98765 43210</a>
          </div>
        </aside>
      </div>
    </>
  );
}
