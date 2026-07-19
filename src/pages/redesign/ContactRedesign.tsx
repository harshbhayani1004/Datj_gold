import { CalendarDays, Check, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactRedesign() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#f5f2ea] text-[#1c2b36]">
      <section className="grid min-h-[700px] pt-28 lg:grid-cols-2">
        <div className="flex items-center bg-[#13293d] px-5 py-20 text-white md:px-10 lg:px-[8vw]">
          <div className="max-w-xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7c59a]">Datj Gold Concierge</p>
            <h1 className="font-serif text-6xl leading-[.88] md:text-8xl">Let’s find what<br /><span className="italic text-[#d7c59a]">feels like you.</span></h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/65">Book a private appointment, ask about a piece, or begin a custom design. Our jewellery experts are here to help.</p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <a href="tel:+919876543210" className="rounded-sm border border-white/15 p-5 transition hover:border-[#d7c59a]">
                <Phone className="mb-6 h-5 w-5 text-[#d7c59a]" />
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Call us</p>
                <p className="mt-2 text-sm">+91 98765 43210</p>
              </a>
              <a href="mailto:concierge@datjgold.com" className="rounded-sm border border-white/15 p-5 transition hover:border-[#d7c59a]">
                <Mail className="mb-6 h-5 w-5 text-[#d7c59a]" />
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Email</p>
                <p className="mt-2 text-sm">concierge@datjgold.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#e7ebe3] px-5 py-20 md:px-10 lg:px-[7vw]">
          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="rounded-md bg-white p-9 text-center shadow-sm md:p-12">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#13293d] text-white"><Check className="h-6 w-6" /></div>
                <h2 className="mt-7 font-serif text-4xl">Your request is with us.</h2>
                <p className="mt-4 text-sm leading-7 text-[#66747c]">A Datj Gold concierge will get back to you within one business day.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="lux-button mt-8">Send another enquiry</button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <CalendarDays className="mb-6 h-7 w-7 text-[#506c63]" />
                  <h2 className="font-serif text-5xl">How can we help?</h2>
                  <p className="mt-3 text-sm leading-7 text-[#66747c]">Tell us a little about what you’re looking for.</p>
                </div>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#63717a]">Name<input required className="form-field" placeholder="Your name" /></label>
                    <label className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#63717a]">Phone<input required type="tel" className="form-field" placeholder="+91" /></label>
                  </div>
                  <label className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#63717a]">Email<input required type="email" className="form-field" placeholder="you@example.com" /></label>
                  <label className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#63717a]">I’m interested in
                    <select className="form-field">
                      <option>Private store appointment</option>
                      <option>Bridal consultation</option>
                      <option>Custom jewellery</option>
                      <option>Product guidance</option>
                      <option>Order support</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#63717a]">Message<textarea rows={4} className="form-field resize-none" placeholder="Tell us about the piece or occasion" /></label>
                  <button type="submit" className="lux-button mt-2 w-full justify-center">Request a consultation</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-8 rounded-md bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div className="flex gap-5">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#506c63]" />
            <div><p className="eyebrow">Visit the atelier</p><h2 className="font-serif text-3xl">Heritage District, Jaipur</h2><p className="mt-2 text-sm text-[#66747c]">Monday–Saturday, 11 AM–8 PM · Sunday by appointment</p></div>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="lux-button-light">Get directions</a>
        </div>
      </section>
    </div>
  );
}
