import {
  Star,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import logoImg from "@/assets/logo.png";
import { Instagram, Facebook } from "lucide-react";

export default function Reviews() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center">
        <div className="absolute inset-0 -z-10 bg-grain opacity-60" />
        <div className="absolute -top-32 right-[-10%] -z-10 h-[460px] w-[460px] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />

        <div className="container-page relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Your opinion matters to us
          </span>

          <h1 className="mt-6 text-balance text-[clamp(2.2rem,6vw,4rem)] leading-[1.04]">
            Tell us how we did —{" "}
            <em className="italic text-secondary">your review</em> makes a difference.
          </h1>

          <p className="mt-5 mx-auto max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            A quick review helps other families find the reliable cleaning
            service they deserve. It only takes 60 seconds!
          </p>

          <div className="mt-8 flex justify-center items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">5.0</span>
          </div>
        </div>
      </section>

      {/* REVIEW CARDS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary text-center">
            Choose your platform
          </p>
          <h2 className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl text-center mx-auto max-w-xl">
            Where would you like to leave your review?
          </h2>
          <p className="mt-5 text-center text-muted-foreground max-w-lg mx-auto">
            Pick the platform that's most convenient for you — both help us
            grow and serve more families.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">

            {/* Google */}
            <a
              href="https://g.page/r/CVDQsOj-D4F8EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-5 rounded-[2rem] border border-border bg-card p-10 shadow-card transition hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lifted"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-white shadow-soft">
                <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 19.0 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a11.994 11.994 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Google
              </p>
              <h3 className="text-2xl">Review on Google</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Help future customers find us on Google Search & Maps. Your
                review shows up right when people need us most.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-glow transition group-hover:brightness-110">
                Leave a Google Review
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61588045814894&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-5 rounded-[2rem] border border-border bg-card p-10 shadow-card transition hover:-translate-y-1 hover:border-[#1877F2]/30 hover:shadow-lifted"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#1877F2]">
                <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 24C42 14.059 33.941 6 24 6S6 14.059 6 24c0 8.984 6.566 16.418 15.188 17.779V29.25h-4.57V24h4.57v-3.961c0-4.511 2.688-7.004 6.801-7.004 1.97 0 4.031.352 4.031.352v4.43h-2.271c-2.237 0-2.934 1.389-2.934 2.812V24h4.993l-.799 5.25h-4.194v12.529C35.434 40.418 42 32.984 42 24z" fill="white"/>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Facebook
              </p>
              <h3 className="text-2xl">Review on Facebook</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Share your experience with your Facebook community. Your
                recommendation reaches people who trust your opinion.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-semibold text-white transition group-hover:brightness-110">
                Leave a Facebook Review
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            {
              name: "Megan R.",
              city: "Birmingham, AL",
              text: "Cristiane's team is the real deal. Our house has never looked this good — they even cleaned the inside of my oven without me asking.",
            },
            {
              name: "David & Priya K.",
              city: "Hoover, AL",
              text: "We've tried four cleaning companies. This is the first one we'll keep. Punctual, friendly, and the bathrooms are honestly hotel-level.",
            },
            {
              name: "Samantha L.",
              city: "Vestavia Hills, AL",
              text: "Booked a move-out clean and got my full deposit back. The landlord literally asked who we used. Worth every dollar.",
            },
          ].map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed italic text-foreground">
                "{r.text}"
              </p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">
                — {r.name}, {r.city}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <a href="/">
            <img src={logoImg} alt="Cristiane Cleaning Services" className="h-14 w-auto" />
          </a>
          <p>© {new Date().getFullYear()} Cristiane Cleaning Services. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://agenciaadcompany.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary hover:underline"
            >
              AD Company
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
