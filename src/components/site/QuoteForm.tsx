import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  address: z.string().trim().min(5, "Enter your address").max(160),
  service: z.string().min(1, "Choose a service"),
  message: z.string().max(800).optional().or(z.literal("")),
});

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="text-2xl">Request received!</h3>
        <p className="max-w-md text-muted-foreground">
          Thanks — Cristiane will personally reach out within one business hour to confirm your free estimate.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" className={field} placeholder="Jane Doe" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="(555) 123-4567" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={field} placeholder="jane@email.com" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={label} htmlFor="service">Cleaning type</label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="" disabled>Select a service</option>
            <option>House Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In Cleaning</option>
            <option>Move-Out Cleaning</option>
            <option>Recurring Cleaning</option>
            <option>Apartment Cleaning</option>
            <option>Post-Construction Cleaning</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="address">Service address</label>
        <input id="address" name="address" className={field} placeholder="123 Maple St, City, ST" />
        {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address}</p>}
      </div>

      <div>
        <label className={label} htmlFor="message">Tell us about your home (optional)</label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Square footage, bedrooms, pets, special requests…" />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-glow transition hover:brightness-110"
      >
        Request My Free Estimate
      </button>
      <p className="text-center text-xs text-muted-foreground">
        No spam, ever. We reply within one business hour, 7 days a week.
      </p>
    </form>
  );
}
