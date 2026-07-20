import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/siteConfig";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Learn how Sampreshan Media collects, uses, stores, and protects personal information when you visit our website, contact us, or apply for a role.";
const updatedAt = "July 20, 2026";

interface PolicySection {
  id: string;
  title: string;
  content: ReactNode;
}

function BulletList({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-text-body marker:text-brand">
      {children}
    </ul>
  );
}

const sections: ReadonlyArray<PolicySection> = [
  {
    id: "scope",
    title: "Scope of this policy",
    content: (
      <>
        <p>
          This policy applies when you browse our website, contact us, request
          or receive services, submit a career application, or otherwise
          communicate with us. A client agreement or service-specific notice
          may provide additional information for a particular engagement.
        </p>
        <p>
          Websites and services operated by other organisations are governed by
          their own privacy notices, even when we link to or integrate them.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    content: (
      <>
        <p>
          The information we collect depends on how you interact with us and
          may include:
        </p>
        <BulletList>
          <li>
            <strong className="text-text-heading">Contact details:</strong>{" "}
            your name, email address, phone number, company, and preferred
            service.
          </li>
          <li>
            <strong className="text-text-heading">Communications:</strong>{" "}
            messages, project enquiries, feedback, support requests, and
            records of correspondence.
          </li>
          <li>
            <strong className="text-text-heading">Client information:</strong>{" "}
            billing details, project requirements, approvals, account contacts,
            contracts, and information needed to deliver a service.
          </li>
          <li>
            <strong className="text-text-heading">Career information:</strong>{" "}
            your full name, email, phone number, CV or resume, cover letter,
            portfolio or LinkedIn URL, qualifications, and other details you
            include in an application.
          </li>
          <li>
            <strong className="text-text-heading">Technical information:</strong>{" "}
            internet protocol address, browser and device type, requested
            pages, referring page, timestamps, and diagnostic or security logs
            that our hosting infrastructure may receive.
          </li>
        </BulletList>
        <p>
          Please avoid sending sensitive personal information unless we
          specifically request it and it is necessary for the relevant purpose.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "How we collect information",
    content: (
      <>
        <p>We collect information:</p>
        <BulletList>
          <li>
            directly from you when you send an enquiry, email or career
            application, speak with us, or become a client;
          </li>
          <li>
            through our website and the systems that securely deliver its pages
            and features;
          </li>
          <li>
            from your organisation, colleagues, references, or publicly
            available professional sources where appropriate; and
          </li>
          <li>
            from service providers that help us operate our business or deliver
            an agreed service.
          </li>
        </BulletList>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    content: (
      <>
        <p>We may use personal information to:</p>
        <BulletList>
          <li>respond to enquiries and prepare proposals or estimates;</li>
          <li>plan, provide, maintain, support, and improve our services;</li>
          <li>
            manage client relationships, contracts, billing, payments, and
            business records;
          </li>
          <li>
            evaluate applications, contact candidates, arrange interviews, and
            manage recruitment;
          </li>
          <li>
            operate, troubleshoot, protect, and understand the performance of
            our website and systems;
          </li>
          <li>
            prevent fraud, misuse, security incidents, and unlawful activity;
            and
          </li>
          <li>
            meet legal obligations, enforce agreements, and establish or defend
            legal claims.
          </li>
        </BulletList>
        <p>
          We do not sell personal information. We will not use information
          collected for one purpose for an incompatible purpose without an
          appropriate reason or permission.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we process information",
    content: (
      <>
        <p>
          Depending on the interaction and applicable law, we process
          information with your consent, to take steps at your request or
          perform a contract, to comply with a legal obligation, or for
          legitimate business purposes such as responding to enquiries,
          securing our systems, and improving our services.
        </p>
        <p>
          Where processing depends on consent, you may withdraw that consent
          for future use by contacting us. Withdrawal does not affect processing
          that was lawful before it was withdrawn.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share information",
    content: (
      <>
        <p>
          We disclose personal information only where reasonably needed,
          including to:
        </p>
        <BulletList>
          <li>
            employees, contractors, and collaborators who need it for their
            work and are subject to confidentiality obligations;
          </li>
          <li>
            hosting, cloud, communications, recruitment, storage, professional,
            and other service providers working for us;
          </li>
          <li>
            advisers, insurers, auditors, or parties involved in a business
            reorganisation or transaction; and
          </li>
          <li>
            courts, regulators, law-enforcement bodies, or other persons when
            required by law or reasonably necessary to protect rights, safety,
            and security.
          </li>
        </BulletList>
        <p>
          Service providers may use the information only to perform the
          relevant service for us or as otherwise permitted by their agreement
          and applicable law.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International processing",
    content: (
      <p>
        Some technology and cloud service providers may process or store
        information outside Nepal. Where this occurs, we take reasonable steps
        to select reputable providers and use contractual, organisational, or
        technical safeguards appropriate to the information and applicable law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    content: (
      <>
        <p>
          We keep personal information only for as long as reasonably needed
          for the purpose for which it was collected, including providing
          services, considering applications, maintaining business and financial
          records, resolving disputes, and meeting legal obligations.
        </p>
        <p>
          Retention periods vary by record type and consider the amount,
          sensitivity, legal requirements, operational need, and risk of harm.
          When information is no longer required, we delete, anonymise, or
          securely archive it as appropriate.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect information",
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and organisational
          measures designed to protect personal information against unauthorised
          access, alteration, disclosure, loss, or misuse. Access is limited to
          people and providers who reasonably need the information for an
          authorised purpose.
        </p>
        <p>
          No internet transmission or storage system is completely secure. If
          you believe information you shared with us has been compromised,
          please contact us promptly.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Subject to applicable law and relevant exceptions, you may ask us to:
        </p>
        <BulletList>
          <li>confirm whether we hold personal information about you;</li>
          <li>provide access to or a copy of that information;</li>
          <li>correct inaccurate or incomplete information;</li>
          <li>delete information that is no longer required;</li>
          <li>
            limit or object to certain processing, or withdraw consent; and
          </li>
          <li>explain how we have handled a privacy request.</li>
        </BulletList>
        <p>
          To protect your information, we may need to verify your identity
          before completing a request. We may retain information where required
          by law or where another lawful reason applies. You may also raise a
          concern with the relevant authority or seek another remedy available
          under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and external services",
    content: (
      <>
        <p>
          We do not currently use optional advertising or analytics cookies on
          this website. Essential infrastructure may use limited technical
          storage or receive server logs when needed to deliver and secure the
          site.
        </p>
        <p>
          Our contact page embeds a Google Maps view, and our website links to
          social networks and other external services. Those providers may
          receive technical information or set cookies when you load or visit
          their content. Their own privacy and cookie policies apply. If we
          introduce optional analytics or advertising technologies, we will
          update this policy and provide choices where required.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        Our website and services are intended for businesses, professionals,
        and job applicants and are not directed to children. We do not knowingly
        collect personal information from a child without appropriate
        permission. If you believe a child has provided information to us
        improperly, please contact us so we can review and remove it where
        appropriate.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    content: (
      <p>
        We may update this policy when our services, technology, practices, or
        legal obligations change. The revised policy will be posted on this page
        with a new &ldquo;Last updated&rdquo; date. Where appropriate, we will
        provide additional notice of a material change.
      </p>
    ),
  },
];

export const metadata = createPageMetadata({
  title,
  description,
  path: "/privacy",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({ title, description, path: "/privacy" }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />

      <header className="relative overflow-hidden bg-brand-950 px-5 pt-32 pb-16 text-white sm:px-6 sm:pt-36 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute -top-32 right-[-8rem] h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-[-8rem] h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="container-custom relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-accent backdrop-blur-sm">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Your privacy
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75">
            This policy explains what personal information we handle, why we
            use it, and the choices available to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65">
            <p>
              <span className="font-semibold text-white">Effective:</span>{" "}
              {updatedAt}
            </p>
            <p>
              <span className="font-semibold text-white">Last updated:</span>{" "}
              {updatedAt}
            </p>
          </div>
        </div>
      </header>

      <main className="bg-bg-page px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="container-custom grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <aside className="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-text-heading">
              On this page
            </h2>
            <nav aria-label="Privacy policy sections" className="mt-5">
              <ol className="space-y-1.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 rounded-lg px-2 py-2 text-sm leading-5 text-text-muted transition-colors hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <span className="w-5 shrink-0 font-semibold text-brand/65 group-hover:text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="group flex gap-3 rounded-lg px-2 py-2 text-sm leading-5 text-text-muted transition-colors hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span className="w-5 shrink-0 font-semibold text-brand/65 group-hover:text-brand">
                      14
                    </span>
                    <span>Contact us</span>
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-border bg-bg-surface px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="border-b border-border pb-10">
              <p className="text-lg leading-8 text-text-body">
                {siteConfig.name} (&ldquo;Sampreshan&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy. We
                collect and use personal information only for clear business,
                service, recruitment, security, and legal purposes.
              </p>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                This policy should be read together with our{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                >
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>

            <div className="divide-y divide-border">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  className="py-10"
                  aria-labelledby={section.id}
                >
                  <h2
                    id={section.id}
                    className="scroll-mt-28 text-2xl font-black tracking-tight text-text-heading sm:text-3xl"
                  >
                    {index + 1}. {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-text-body">
                    {section.content}
                  </div>
                </section>
              ))}

              <section className="pt-10" aria-labelledby="contact">
                <h2
                  id="contact"
                  className="scroll-mt-28 text-2xl font-black tracking-tight text-text-heading sm:text-3xl"
                >
                  14. Contact us
                </h2>
                <p className="mt-4 text-base leading-8 text-text-body">
                  To ask a privacy question or exercise a privacy right, contact
                  us using the details below. Please describe your request and
                  how we can identify the relevant information.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a
                    href={`mailto:${siteConfig.email}?subject=Privacy%20request`}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-bg-page p-5 transition-all hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-subtle text-brand">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-text-heading">
                        Email
                      </span>
                      <span className="mt-1 flex items-center gap-1 break-all text-sm text-text-body group-hover:text-brand">
                        {siteConfig.email}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>

                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-bg-page p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent-dark">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-text-heading">
                        Office
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-text-body">
                        {siteConfig.address.streetAddress},{" "}
                        {siteConfig.address.addressRegion}, Nepal{" "}
                        {siteConfig.address.postalCode}
                      </span>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
