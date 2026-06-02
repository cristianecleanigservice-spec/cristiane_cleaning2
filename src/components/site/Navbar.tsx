import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Before & After" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service Area" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-4 text-center">
        <a href="#top" className="flex items-center">
          <img src={logoImg} alt="Cristiane Cleaning Services" className="h-21 w-auto text-center" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16592814098"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-secondary"
          >
            <Phone className="h-4 w-4 text-accent" /> (659) 281-4098
          </a>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-soft transition hover:brightness-110"
          >
            Get Free Estimate
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
