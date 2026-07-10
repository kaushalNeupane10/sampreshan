import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section>
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-text-heading md:text-4xl">
          Get in touch
        </h2>

        <p className="mt-4 text-base leading-7 text-text-body">
          Prefer email or a call? Reach us directly using the contact details
          below. We&apos;d love to hear about your project.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-subtle">
            <Mail className="text-brand" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-text-heading">Email</h3>

            <a
              href="mailto:hello@sampreshanmedia.com"
              className="mt-1 block text-text-body transition-colors hover:text-brand"
            >
              hello@sampreshanmedia.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-subtle">
            <Phone className="text-brand" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-text-heading">Phone</h3>

            <a
              href="tel:+9779800000000"
              className="mt-1 block text-text-body transition-colors hover:text-brand"
            >
              +977 9800000000
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-subtle">
            <MapPin className="text-brand" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-text-heading">Office</h3>

            <p className="mt-1 leading-7 text-text-body">
              Putalisadak,
              <br />
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex aspect-16/10 items-center justify-center rounded-3xl border border-dashed border-border bg-bg-sunken">
        <span className="text-text-muted">
          Google Map will be integrated here
        </span>
      </div>
    </section>
  );
}
