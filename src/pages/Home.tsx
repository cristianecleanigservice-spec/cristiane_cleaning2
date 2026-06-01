import {
  Sparkles,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Home as HomeIcon,
  Droplets,
  Truck,
  PackageOpen,
  CalendarHeart,
  HardHat,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Quote,
  BadgePercent,
  Instagram,
  Facebook,
  Award,
  Leaf,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { QuoteForm } from "@/components/site/QuoteForm";
import heroImg from "@/assets/hero-living-room.jpg";
import cleanerImg from "@/assets/cleaner-portrait.jpeg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBath from "@/assets/before-bathroom.jpg";
import afterBath from "@/assets/after-bathroom.jpg";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "Cristiane Cleaning Services",
  image: "/og-image.jpg",
  telephone: "+1-659-281-4098",
  email: "hello@cristianecleaning.com",
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: "2205 Inverness Landing", addressLocality: "Birmingham", addressRegion: "AL", addressCountry: "US" },
  areaServed: "United States",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "187",
  },
};

const services = [
  { icon: HomeIcon, title: "House Cleaning", desc: "Top-to-bottom regular cleans that keep every room fresh and guest-ready." },
  { icon: Droplets, title: "Deep Cleaning", desc: "Detail work on baseboards, grout, vents and the spots routine cleans miss." },
  { icon: Truck, title: "Move-In Cleaning", desc: "Start your new chapter in a sanitized, sparkling-clean home from day one." },
  { icon: PackageOpen, title: "Move-Out Cleaning", desc: "Leave your old place spotless and get your full security deposit back." },
  { icon: CalendarHeart, title: "Recurring Cleaning", desc: "Weekly, bi-weekly or monthly visits on a schedule that fits your life." },
  { icon: HardHat, title: "Post-Construction", desc: "Dust, debris and residue removal after remodels, builds and renovations." },
];

const reasons = [
  { icon: Award, title: "Experienced Team", desc: "Vetted, background-checked, trained on the details that matter." },
  { icon: ShieldCheck, title: "Reliable Service", desc: "Show-up windows we actually hit. No no-shows, no excuses." },
  { icon: Sparkles, title: "Attention to Detail", desc: "Light switches, baseboards, behind toilets — we don't skip the small stuff." },
  { icon: BadgePercent, title: "Affordable Pricing", desc: "Flat-rate quotes with no surprises. You know the price before we arrive." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Evenings and weekends available. Book in under two minutes." },
  { icon: HeartHandshake, title: "100% Satisfaction", desc: "If anything's missed, we come back within 24 hours and fix it free." },
];

const reviews = [
  { name: "Megan R.", city: "Birmingham, AL", text: "Cristiane's team is the real deal. Our house has never looked this good — they even cleaned the inside of my oven without me asking." },
  { name: "David & Priya K.", city: "Hoover, AL", text: "We've tried four cleaning companies. This is the first one we'll keep. Punctual, friendly, and the bathrooms are honestly hotel-level." },
  { name: "Samantha L.", city: "Vestavia Hills, AL", text: "Booked a move-out clean and got my full deposit back. The landlord literally asked who we used. Worth every dollar." },
];

const areas = [
  "Birmingham", "Hoover", "Vestavia Hills", "Alabaster", "Bessemer", "Homewood",
  "Pelham", "Trussville", "Mountain Brook", "Helena", "Center Point", "Hueytown",
];

export default function Home() {
  return (
    <main id="top" className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grain opacity-60" />
        <div className="absolute -top-32 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl" />

        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now booking for this week — same-week availability
            </span>

            <h1 className="mt-6 text-balance text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] text-foreground">
              Professional house cleaning <span className="italic text-secondary">you can trust.</span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              Reliable, detailed and affordable cleaning services designed to keep your home spotless — so your weekends belong to you again.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-glow transition hover:brightness-110">
                Get Free Estimate
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="tel:+16592814098" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary hover:text-secondary">
                <Phone className="h-4 w-4 text-accent" /> (659) 281-4098
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-foreground/80">
              {[
                { icon: ShieldCheck, label: "Fully Insured & Bonded" },
                { icon: HeartHandshake, label: "Reliable, Vetted Team" },
                { icon: Star, label: "5-Star Customer Reviews" },
              ].map((t) => (
                <li key={t.label} className="flex items-center gap-2 font-medium">
                  <t.icon className="h-4 w-4 text-accent" /> {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lifted">
              <img src={heroImg} alt="Bright, immaculately clean modern living room" width={1600} height={1200} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden max-w-[260px] rounded-2xl border border-border bg-card p-4 shadow-card sm:block">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm leading-snug text-foreground">"Best cleaning service I've ever hired — by a mile."</p>
              <p className="mt-2 text-xs text-muted-foreground">— Megan R., Birmingham AL</p>
            </div>

            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:flex sm:items-center sm:gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <Leaf className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Eco-friendly</p>
                <p className="text-xs text-muted-foreground">Pet & kid safe products</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-border bg-surface/60">
          <div className="container-page grid grid-cols-2 gap-6 py-6 text-center sm:grid-cols-4">
            {[
              ["12+", "Years of experience"],
              ["3,200+", "Homes cleaned"],
              ["5.0★", "Avg. rating, 180+ reviews"],
              ["100%", "Satisfaction guarantee"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl text-secondary md:text-3xl">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">What we do</p>
            <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl">
              A cleaning service built around <em className="not-italic text-secondary">your</em> home.
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5">
            From routine refreshes to deep, detail-driven cleans — every visit is custom-tailored to the way you actually live.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.title} className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-secondary transition group-hover:bg-secondary group-hover:text-secondary-foreground">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a href="#quote" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                Get a quote <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute right-5 top-5 font-display text-xs text-muted-foreground/60">0{i + 1}</span>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="results" className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
            <a 
              href="https://share.google/oJpI6MbLBTro4E3Qn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google Reviews
              </span>
              <div className="h-4 w-[1px] bg-border"></div>
              <div className="flex text-[#FBBC05]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`g-${i}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </a>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Real results</p>
            <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl">
              See the difference professional cleaning makes.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Drag the slider on each photo. These are real homes cleaned by our team — no staging, no filters.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div>
              <BeforeAfter before={beforeKitchen} after={afterKitchen} alt="Kitchen" />
              <p className="mt-3 text-sm font-medium text-foreground/80">Kitchen — Deep Clean · 4 hrs</p>
            </div>
            <div>
              <BeforeAfter before={beforeBath} after={afterBath} alt="Bathroom" />
              <p className="mt-3 text-sm font-medium text-foreground/80">Master Bathroom — Move-Out · 3 hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-[2rem] shadow-card">
                <img src={cleanerImg} alt="Cristiane Cleaning Services professional cleaner" width={1000} height={1200} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="font-display text-lg italic text-foreground">"I treat every home like it's my own. That's the standard, always."</p>
                <p className="mt-3 text-sm font-semibold text-secondary">— Cristiane, Founder</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Why families choose us</p>
            <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl">
              Cleaning is personal. <br className="hidden md:block" />
              We treat it that way.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              We're not a faceless franchise. We're a small, family-led team that earns trust one home at a time — and shows up the same way, every single visit.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:border-accent/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                    <r.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-lg">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Reviews</p>
              <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl">
                A 5-star rated cleaning service.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold">5.0 average · 187 reviews</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <Quote className="h-7 w-7 text-primary-soft" fill="currentColor" />
                <blockquote className="text-base leading-relaxed text-foreground">"{r.text}"</blockquote>
                <figcaption className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.city}</p>
                  </div>
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="container-page py-20 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--gradient-brand)] p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <BadgePercent className="h-3.5 w-3.5" /> New customer offer
              </span>
              <h2 className="mt-4 text-balance text-4xl text-primary-foreground md:text-5xl">
                15% off your first cleaning.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Try Cristiane Cleaning Services risk-free. If you're not 100% satisfied, we'll re-clean any area within 24 hours — no questions asked.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-semibold text-secondary shadow-lifted transition hover:bg-accent hover:text-accent-foreground">
                Claim Your Discount <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="areas" className="container-page pb-20 md:pb-28">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-10 shadow-soft md:grid-cols-12 md:p-14">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Service area</p>
            <h2 className="mt-3 text-balance text-3xl md:text-4xl">Proudly serving local families.</h2>
            <p className="mt-5 text-muted-foreground">
              We serve homeowners, renters and property managers across the metro. Don't see your city? Call us — we may still be able to help.
            </p>
            <a href="tel:+16592814098" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              <Phone className="h-4 w-4" /> Check availability — (659) 281-4098
            </a>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm font-medium text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="quote" className="bg-surface py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Get in touch</p>
            <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl">
              Request your free, no-obligation estimate.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tell us a little about your home and we'll text back a flat-rate quote within one business hour.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Call or text", value: "(659) 281-4098", href: "tel:+16592814098" },
                { icon: Mail, label: "Email", value: "hello@cristianecleaning.com", href: "mailto:hello@cristianecleaning.com" },
                { icon: Clock, label: "Hours", value: "Mon–Sat · 7am to 7pm" },
                { icon: MapPin, label: "Serving", value: "Homeowners across the U.S." },
              ].map((c) => (
                <a key={c.label} href={c.href ?? "#"} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:border-primary/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-secondary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-semibold text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-card md:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="container-page grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-brand)] text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg">Cristiane</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Cleaning Services</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A family-led residential cleaning company devoted to making American homes shine — one room at a time.
            </p>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-secondary hover:text-secondary">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-secondary hover:text-secondary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}><a href="#services" className="hover:text-secondary">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#why-us" className="hover:text-secondary">Why us</a></li>
              <li><a href="#reviews" className="hover:text-secondary">Reviews</a></li>
              <li><a href="#areas" className="hover:text-secondary">Service area</a></li>
              <li><a href="#quote" className="hover:text-secondary">Free estimate</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (659) 281-4098</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@cristianecleaning.com</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Mon–Sat · 7am–7pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Cristiane Cleaning Services. All rights reserved.</p>
            <p>Fully insured & bonded · Licensed residential cleaning</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
