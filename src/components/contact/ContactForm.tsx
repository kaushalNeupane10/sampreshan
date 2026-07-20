"use client";

import Button from "@/components/ui/Button";
import Input from "../ui/Input";

const services = [
  "Web Development",
  "Mobile Development",
  "UI / UX Design",
  "Branding",
  "Digital Marketing",
  "Video Production",
];

export default function ContactForm() {
  return (
    <section className="rounded-3xl border border-border bg-bg-surface p-6 shadow-md md:p-8">
      <div>
        <h2 className="text-3xl font-bold text-text-heading">
          Send us a message
        </h2>

        <p className="mt-3 text-text-body">
          Fill in the form and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input label="Name" type="text" placeholder="John Doe" />
          </div>

          <div>
            <Input label="Email" type="email" placeholder="john@example.com" />
          </div>

          <div>
            <Input label="Company" type="text" placeholder="Your company" />
          </div>

          <div>
            <Input
              label="Phone Number"
              type="number"
              placeholder="9801010101"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-text-heading">
              Service
            </label>

            <select className="h-12 w-full rounded-xl border border-border bg-bg-page px-4 text-text-body outline-none transition-colors focus:border-brand">
              <option value="">Select a service</option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-heading">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-xl border border-border bg-bg-page p-4 text-text-body outline-none transition-colors placeholder:text-text-muted focus:border-brand"
          />
        </div>

        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
