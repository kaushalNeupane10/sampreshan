import { ExternalLink, Mail, MapPin, MapPinned, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const officeCoordinates = siteConfig.geo;

const coordinateQuery = `${officeCoordinates.latitude},${officeCoordinates.longitude}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${coordinateQuery}&z=16&output=embed`;
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinateQuery}`;

export default function ContactInfo() {
  return (
    <section>
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-text-heading md:text-4xl">
          Contact Sampreshan Media
        </h1>

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
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block text-text-body transition-colors hover:text-brand"
            >
              {siteConfig.email}
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
              href={`tel:${siteConfig.telephone}`}
              className="mt-1 block text-text-body transition-colors hover:text-brand"
            >
              +977 9807126533
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
              Bharatpur 10, Bagmati, Nepal 44207
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-brand/15 bg-bg-surface shadow-lg">
        <div className="relative aspect-16/10 min-h-72 overflow-hidden bg-bg-sunken">
          <iframe
            src={googleMapsEmbedUrl}
            title="Sampreshan Media office location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[15%] saturate-[.85] contrast-[1.05]"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-950/20 via-transparent to-transparent" />

          <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-neutral-900/90 p-3 pr-4 text-white shadow-xl backdrop-blur-md">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md">
              <MapPinned className="h-5 w-5" aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm font-bold">Sampreshan Media</span>
              <span className="mt-0.5 block text-xs text-white/70">
                Office location
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border bg-bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-subtle text-brand">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>

            <div>
              <p className="text-sm font-bold text-text-heading">
                Visit our office
              </p>
              <p className="mt-0.5 text-xs text-text-muted">
                Bharatpur 10, Bagmati, Nepal 44207
              </p>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand"
          >
            Open in Google Maps
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
