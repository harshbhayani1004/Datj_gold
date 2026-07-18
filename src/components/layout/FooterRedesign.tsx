import { ArrowRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const shopLinks = [
  ['Rings', '/collection/rings'],
  ['Necklaces', '/collection/necklaces'],
  ['Earrings', '/collection/earrings'],
  ['Bangles', '/collection/bangles'],
  ['Bridal', '/collection/bridal-sets'],
  ['Gifts', '/collection/gifts'],
];

export default function FooterRedesign() {
  return (
    <footer className="bg-[#0b1b2a] text-white">
      <div className="border-b border-white/10 px-5 py-16 md:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c2aa78]">The Ruprays Journal</p>
            <h2 className="max-w-3xl font-serif text-5xl font-medium leading-[.95] md:text-7xl">
              New collections and considered notes,
              <span className="block italic text-[#d7c59a]">sent occasionally.</span>
            </h2>
          </div>
          <form className="lg:pl-16" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="footer-email" className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">Email address</label>
            <div className="flex border-b border-white/30 pb-3">
              <input id="footer-email" type="email" required placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30" />
              <button type="submit" aria-label="Subscribe to the Ruprays Journal" className="grid h-10 w-10 place-items-center border border-white/25 transition hover:border-[#c2aa78] hover:text-[#c2aa78]">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-[10px] leading-5 text-white/35">Private previews, care guidance and atelier stories. No clutter.</p>
          </form>
        </div>
      </div>

      <div className="px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] text-[#d7c59a]">RUPRAYS</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Fine gold and diamond jewellery, handcrafted in India with transparent materials and personal guidance.
            </p>
            <div className="mt-7 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/15 transition hover:border-[#c2aa78] hover:text-[#c2aa78]"><Instagram className="h-4 w-4" /></a>
              <a href="mailto:concierge@ruprays.com" aria-label="Email Ruprays" className="grid h-10 w-10 place-items-center border border-white/15 transition hover:border-[#c2aa78] hover:text-[#c2aa78]"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Shop</h3>
            <ul className="space-y-3.5 text-sm text-white/62">
              {shopLinks.map(([label, to]) => <li key={label}><Link to={to} className="transition hover:text-[#d7c59a]">{label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Ruprays</h3>
            <ul className="space-y-3.5 text-sm text-white/62">
              <li><Link to="/about" className="transition hover:text-[#d7c59a]">Our Story</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#d7c59a]">Book an Appointment</Link></li>
              <li><Link to="/wishlist" className="transition hover:text-[#d7c59a]">Wishlist</Link></li>
              <li><Link to="/login" className="transition hover:text-[#d7c59a]">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Concierge</h3>
            <div className="space-y-4 text-sm leading-6 text-white/62">
              <a href="tel:+919876543210" className="flex gap-3 transition hover:text-[#d7c59a]"><Phone className="mt-1 h-4 w-4 shrink-0" /> +91 98765 43210</a>
              <a href="mailto:concierge@ruprays.com" className="flex gap-3 transition hover:text-[#d7c59a]"><Mail className="mt-1 h-4 w-4 shrink-0" /> concierge@ruprays.com</a>
              <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0" /> Heritage District, Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-[9px] uppercase tracking-[0.18em] text-white/30 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ruprays Jewellery</p>
          <p>BIS Hallmarked · Certified Diamonds · Insured Delivery</p>
        </div>
      </div>
    </footer>
  );
}
