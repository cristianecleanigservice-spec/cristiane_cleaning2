import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  zipcode: z.string().trim().min(5, "Enter your zip code").max(20),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(2, "Please tell us about your home").max(800),
});

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    // Honeypot check for anti-bot
    if (data._botcheck) {
      setSent(true);
      return;
    }

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
    setSubmitting(true);
    try {
      fd.append("access_key", "bc046721-0ee0-43c0-8f73-eb60d00c65c4");
      fd.append("subject", "New Quote Request - Cristiane Cleaning");
      fd.append("from_name", "Cristiane Cleaning Website");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
      } else {
        setErrors({ message: json.message || "Could not send. Please try again." });
      }
    } catch (err) {
      setErrors({ message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
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
      <input type="text" name="_botcheck" className="sr-only" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" className={field} placeholder="Jane Doe" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="(659) 281-4098" />
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
            <option>Standard Cleaning</option>
            <option>Move-In/Move-Out</option>
            <option>Post-Construction</option>
            <option>Deep Cleaning</option>
            <option>Commercial</option>
            <option>Office</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" name="zipcode" className={field} placeholder="35242" />
        {errors.zipcode && <p className="mt-1 text-xs text-destructive">{errors.zipcode}</p>}
      </div>

      <div>
        <label className={label} htmlFor="message">Tell us about your home</label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Square footage, bedrooms, pets, special requests…" />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-glow transition hover:brightness-110 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request My Free Estimate"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        No spam, ever. We reply within one business hour, 7 days a week.
      </p>
    </form>
  );
}
