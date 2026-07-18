import { ArrowRight, Award, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { icon: ShieldCheck, title: 'Purity, made visible', body: 'Every gold piece is BIS hallmarked, every diamond is certified, and every invoice is transparent.' },
  { icon: Gem, title: 'Craft before scale', body: 'Our pieces pass through specialist hands—setting, polishing and finishing—before they carry the Ruprays name.' },
  { icon: Sparkles, title: 'Designed for real lives', body: 'We balance ceremonial richness with comfort, proportion and the quiet confidence of everyday wear.' },
];

export default function AboutRedesign() {
  return (
    <div className="bg-[#f5f2ea] text-[#1c2b36]">
      <section className="relative min-h-[700px] overflow-hidden bg-[#0b1b2a] pt-28 text-white">
        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&h=1100&fit=crop&auto=format&q=88" alt="Ruprays fine jewellery" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b2a]/95 via-[#13293d]/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[590px] max-w-[1500px] items-end px-5 pb-20 md:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7c59a]">Our story</p>
            <h1 className="font-serif text-6xl leading-[.87] md:text-8xl lg:text-9xl">Jewellery with<br /><span className="italic text-[#d7c59a]">a sense of belonging.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/65">Ruprays brings together Indian goldsmithing traditions, contemporary proportion and a deeply personal way of serving every customer.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-md">
              <img src="https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=1000&h=1200&fit=crop&auto=format&q=86" alt="Indian jewellery artisan work" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -right-3 rounded-sm bg-[#13293d] p-7 text-white shadow-2xl md:-right-8">
              <Award className="mb-5 h-6 w-6 text-[#d7c59a]" />
              <p className="font-serif text-3xl">30+ years</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50">of family expertise</p>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <p className="eyebrow">From Jaipur, with care</p>
            <h2 className="font-serif text-5xl leading-[.95] md:text-7xl">A modern house,<br /><span className="italic text-[#506c63]">rooted in craft.</span></h2>
            <div className="mt-8 space-y-6 text-sm leading-7 text-[#63717a] md:text-base md:leading-8">
              <p>Ruprays began as a small family workshop in Jaipur in 1995, built on an uncomplicated promise: precious materials should be matched by honest guidance and exceptional making.</p>
              <p>Today, that promise lives online and in our atelier. Our designers reinterpret the geometry, colour and ceremony of Indian jewellery into pieces that feel relevant now—and worthy of being passed forward.</p>
              <p>We believe luxury is not about excess. It is the quiet assurance of knowing who made your piece, what it is made from, and that it was created to wear beautifully for years.</p>
            </div>
            <Link to="/collection/featured" className="lux-button mt-9">Explore our jewellery <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#e7ebe3] px-5 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center"><p className="eyebrow">What we stand for</p><h2 className="display-title">Precious, in every sense</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-md bg-white p-8 md:p-10">
                <Icon className="mb-10 h-7 w-7 text-[#506c63]" />
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#66747c]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1b2a] px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 text-center sm:grid-cols-3">
          <div><p className="font-serif text-6xl text-[#c2aa78]">30+</p><p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">Years of expertise</p></div>
          <div><p className="font-serif text-6xl text-[#c2aa78]">50</p><p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">Specialist artisans</p></div>
          <div><p className="font-serif text-6xl text-[#c2aa78]">10k+</p><p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">Customer stories</p></div>
        </div>
      </section>
    </div>
  );
}
