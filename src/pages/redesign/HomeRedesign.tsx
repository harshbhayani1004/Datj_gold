import { ArrowRight, CalendarDays, Gem, RefreshCcw, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import JewelleryCard from '../../components/ui/JewelleryCard';
import { categoryTiles, products } from '../../data/catalog';

const promises = [
  { icon: ShieldCheck, title: 'Certified purity', body: 'BIS hallmarked gold and independently certified diamonds.' },
  { icon: RefreshCcw, title: 'Lifetime exchange', body: 'Transparent exchange value on eligible Datj Gold jewellery.' },
  { icon: Truck, title: 'Insured delivery', body: 'Complimentary, tamper-proof shipping across India.' },
  { icon: Gem, title: 'Jewellery concierge', body: 'Real guidance on fit, gifting and customisation.' },
];

export default function HomeRedesign() {
  return (
    <div className="bg-[#f5f2ea] text-[#1c2b36]">
      <section className="relative min-h-[760px] overflow-hidden bg-[#13293d] text-white lg:min-h-[850px]">
        <div className="absolute inset-0 lg:left-[46%]">
          <img
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1400&h=1200&fit=crop&auto=format&q=88"
            alt="Woman wearing an elegant gold necklace"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#13293d] via-[#13293d]/45 to-transparent lg:from-[#13293d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2a]/55 via-transparent to-black/10" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] items-end px-5 pb-20 pt-44 md:px-10 lg:min-h-[850px] lg:items-center lg:pb-0">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7c59a]">
              <span className="h-px w-10 bg-[#d7c59a]" />
              The Bridal Edit 2026
            </div>
            <h1 className="font-serif text-[clamp(4rem,8vw,8.5rem)] leading-[.78] tracking-[-.045em]">
              Made for
              <span className="block italic text-[#d7c59a]">your forever.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/70 md:text-lg">
              Fine gold, diamonds and heirloom-inspired artistry—created for the moments that become family stories.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/collection/bridal-sets" className="inline-flex items-center gap-3 rounded-full bg-[#f6f3ea] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#13293d] transition hover:bg-white">
                Explore bridal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[40%] items-center justify-between border-t border-l border-white/15 bg-[#0b1b2a]/55 px-8 py-5 text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-md lg:flex">
          <span>BIS Hallmarked</span>
          <span>Certified Diamonds</span>
          <span>Insured Delivery</span>
        </div>
      </section>

      <section className="border-b border-[#18384e]/10 bg-[#ebe5d8] px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5e6d74] md:justify-between">
          <span>Today’s gold reference</span>
          <span className="font-serif text-base normal-case tracking-normal text-[#18384e]">22KT · ₹12,890/g</span>
          <span>Price confirmed at checkout</span>
          <Link to="/contact" className="border-b border-[#18384e]/30 pb-0.5 text-[#18384e]">Talk to an expert</Link>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Find your piece</p>
              <h2 className="display-title">Shop by category</h2>
            </div>
            <Link to="/collection/featured" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#18384e]">
              View all jewellery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="product-scroll grid grid-flow-col auto-cols-[44%] gap-4 overflow-x-auto pb-3 sm:auto-cols-[30%] md:grid-flow-row md:auto-cols-auto md:grid-cols-3 lg:grid-cols-6">
            {categoryTiles.map((item) => (
              <Link key={item.slug} to={`/collection/${item.slug}`} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-[999px] bg-[#e2ded2]">
                  <img src={item.image} alt={item.label} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <h3 className="font-serif text-xl">{item.label}</h3>
                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <Link to="/collection/featured" className="group relative min-h-[570px] overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1100&h=1100&fit=crop&auto=format&q=86" alt="Contemporary gold jewellery" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2a]/80 via-[#0b1b2a]/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7c59a]">Everyday fine jewellery</p>
              <h3 className="max-w-md font-serif text-5xl leading-none">Quiet luxury,<br /><span className="italic">made personal.</span></h3>
              <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">Discover the edit <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2">
            <Link to="/collection/gifts" className="group relative min-h-[275px] overflow-hidden rounded-md bg-[#dde3dc] sm:col-span-2">
              <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&h=650&fit=crop&auto=format&q=84" alt="Diamond pendant gift" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#13293d]/80 via-[#13293d]/20 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-end p-8 text-white">
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#d7c59a]">Gift beautifully</p>
                <h3 className="font-serif text-4xl">Little luxuries,<br />lasting meaning.</h3>
              </div>
            </Link>
            <Link to="/collection/rings" className="group flex min-h-[275px] flex-col justify-between rounded-md bg-[#13293d] p-8 text-white">
              <Sparkles className="h-7 w-7 text-[#d7c59a]" />
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/50">Under ₹1 lakh</p>
                <h3 className="font-serif text-3xl">The proposal edit</h3>
              </div>
            </Link>
            <Link to="/contact" className="group flex min-h-[275px] flex-col justify-between rounded-md bg-[#c2aa78] p-8 text-[#1c2b36]">
              <CalendarDays className="h-7 w-7" />
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#1c2b36]/55">By appointment</p>
                <h3 className="font-serif text-3xl">Private viewing</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 text-center">
            <p className="eyebrow">Most loved</p>
            <h2 className="display-title">Bestsellers, beautifully considered</h2>
          </div>
          <div className="product-scroll grid grid-flow-col auto-cols-[78%] gap-5 overflow-x-auto pb-4 sm:auto-cols-[46%] md:auto-cols-[31%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4">
            {products.slice(0, 8).map((product) => <JewelleryCard key={product.id} product={product} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/collection/featured" className="lux-button">Shop the collection <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1b2a] px-5 py-20 text-white md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow !text-[#c2aa78]">The Datj Gold promise</p>
            <h2 className="font-serif text-5xl leading-[.95] md:text-7xl">Real jewellery.<br /><span className="italic text-[#c2aa78]">Real confidence.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">Every detail—from purity to delivery—is designed to make buying fine jewellery online feel wonderfully certain.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2">
            {promises.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-[#102334] p-8 md:p-10">
                <Icon className="mb-9 h-6 w-6 text-[#c2aa78]" />
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-md bg-[#e7ebe3] lg:grid-cols-2">
          <div className="min-h-[520px]">
            <img src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=1100&h=1000&fit=crop&auto=format&q=86" alt="Datj Gold bridal jewellery craftsmanship" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-9 md:p-16 lg:p-20">
            <p className="eyebrow">Datj Gold Atelier</p>
            <h2 className="font-serif text-5xl leading-[.95] md:text-6xl">Your idea,<br /><span className="italic text-[#506c63]">made precious.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#63717a]">Meet our design experts to personalise a piece, adapt an heirloom or create a bridal set around your celebration.</p>
            <Link to="/contact" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#18384e] pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#18384e]">
              Begin a custom consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#18384e]/10 bg-white px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mb-6 flex justify-center gap-1 text-[#a4864f]">{[1, 2, 3, 4, 5].map((item) => <Star key={item} className="h-4 w-4 fill-current" />)}</div>
          <blockquote className="font-serif text-3xl leading-tight text-[#1c2b36] md:text-5xl">
            “The entire experience felt personal—from choosing the right gold tone to opening the box. The piece is even more beautiful in person.”
          </blockquote>
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7a80]">Rhea M. · Verified buyer</p>
        </div>
      </section>
    </div>
  );
}
