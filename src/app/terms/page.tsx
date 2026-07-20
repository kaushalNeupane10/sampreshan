import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/siteConfig";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Terms and Conditions";
const description =
  "Read the terms that govern use of the Sampreshan Media website and our creative, marketing, production, development, and IT services.";
const updatedAt = "July 20, 2026";

const sections = [
  { id: "acceptance", title: "Acceptance of these terms" },
  { id: "services", title: "Our services" },
  { id: "responsibilities", title: "Client responsibilities" },
  { id: "fees", title: "Fees and payment" },
  { id: "changes", title: "Changes and cancellation" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "third-party-services", title: "Third-party services" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "warranties", title: "Warranties and liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing law" },
  { id: "updates", title: "Updates to these terms" },
  { id: "contact", title: "Contact us" },
] as const;

const articleHeadingClass =
  "scroll-mt-28 text-2xl font-black tracking-tight text-text-heading sm:text-3xl";
const paragraphClass = "mt-4 text-base leading-8 text-text-body";
const listClass =
  "mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-text-body marker:text-brand";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/terms",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({ title, description, path: "/terms" }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms" },
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Legal
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75">
            These terms explain the rules for using our website and working
            with Sampreshan Media.
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
            <nav aria-label="Terms and conditions sections" className="mt-5">
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
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-border bg-bg-surface px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="border-b border-border pb-10">
              <p className="text-lg leading-8 text-text-body">
                These Terms and Conditions (&ldquo;Terms&rdquo;) form an
                agreement between you and {siteConfig.name}
                (&ldquo;Sampreshan&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
                &ldquo;our&rdquo;). They apply when you visit our website or
                engage us for creative, marketing, production, software, or IT
                services.
              </p>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                A signed proposal, statement of work, service agreement, or
                other written contract may contain additional terms. If those
                terms conflict with these Terms, the project-specific agreement
                takes priority for that engagement.
              </p>
            </div>

            <div className="divide-y divide-border">
              <section className="py-10" aria-labelledby="acceptance">
                <h2 id="acceptance" className={articleHeadingClass}>
                  1. Acceptance of these terms
                </h2>
                <p className={paragraphClass}>
                  By accessing this website, requesting a proposal, approving
                  work, or using our services, you confirm that you have read
                  and accepted these Terms. If you act for a business or another
                  organisation, you confirm that you have authority to bind it.
                  If you do not agree, please do not use the website or our
                  services.
                </p>
              </section>

              <section className="py-10" aria-labelledby="services">
                <h2 id="services" className={articleHeadingClass}>
                  2. Our services
                </h2>
                <p className={paragraphClass}>
                  We provide services including brand strategy, graphic design,
                  digital marketing, video production, web and mobile
                  development, technical consulting, cloud infrastructure,
                  systems integration, and related support.
                </p>
                <p className={paragraphClass}>
                  The scope, deliverables, schedule, review rounds, fees, and
                  acceptance process for an engagement will be described in the
                  applicable proposal or project agreement. Estimates and
                  timelines depend on timely feedback, access, approvals, and
                  materials from the client.
                </p>
              </section>

              <section className="py-10" aria-labelledby="responsibilities">
                <h2 id="responsibilities" className={articleHeadingClass}>
                  3. Client responsibilities
                </h2>
                <p className={paragraphClass}>When working with us, you agree to:</p>
                <ul className={listClass}>
                  <li>
                    provide accurate information, clear instructions, and
                    timely feedback and approvals;
                  </li>
                  <li>
                    ensure that you have the rights and permissions needed for
                    all text, images, data, trademarks, software, and other
                    materials you give us;
                  </li>
                  <li>
                    identify any legal, regulatory, accessibility, security, or
                    industry requirements that apply to your project; and
                  </li>
                  <li>
                    keep account credentials and access details secure and tell
                    us promptly about suspected unauthorised use.
                  </li>
                </ul>
                <p className={paragraphClass}>
                  We are not responsible for delays or additional costs caused
                  by incomplete materials, late decisions, changing
                  instructions, or a failure to meet these responsibilities.
                </p>
              </section>

              <section className="py-10" aria-labelledby="fees">
                <h2 id="fees" className={articleHeadingClass}>
                  4. Fees and payment
                </h2>
                <p className={paragraphClass}>
                  Fees, taxes, deposits, payment stages, currencies, and due
                  dates are set out in the relevant proposal, order, or invoice.
                  You agree to pay approved fees and properly incurred expenses
                  according to those terms.
                </p>
                <p className={paragraphClass}>
                  If payment becomes overdue, we may pause work, withhold
                  deliverables, or suspend related services after giving
                  reasonable notice. Pausing work may affect the agreed
                  schedule. You remain responsible for undisputed amounts for
                  work completed and commitments made on your behalf.
                </p>
              </section>

              <section className="py-10" aria-labelledby="changes">
                <h2 id="changes" className={articleHeadingClass}>
                  5. Changes and cancellation
                </h2>
                <p className={paragraphClass}>
                  A request outside the agreed scope may require a revised fee,
                  timeline, or written change approval. We will explain any
                  material effect before beginning additional work.
                </p>
                <p className={paragraphClass}>
                  Either party may cancel an engagement as allowed by the
                  project agreement. Unless that agreement says otherwise, you
                  must pay for work completed and non-cancellable third-party
                  costs incurred up to the cancellation date. Any treatment of
                  a deposit will follow the applicable proposal or agreement.
                </p>
              </section>

              <section
                className="py-10"
                aria-labelledby="intellectual-property"
              >
                <h2 id="intellectual-property" className={articleHeadingClass}>
                  6. Intellectual property
                </h2>
                <p className={paragraphClass}>
                  Each party keeps ownership of materials it owned or developed
                  independently before the engagement. We also retain our
                  reusable tools, methods, know-how, templates, libraries, and
                  pre-existing components.
                </p>
                <p className={paragraphClass}>
                  Ownership or licensing of final deliverables will be stated in
                  the project agreement. Unless agreed otherwise in writing,
                  rights in final deliverables transfer only after we receive
                  full payment, and preliminary concepts, rejected work, source
                  files, and working materials remain ours.
                </p>
                <p className={paragraphClass}>
                  Where reasonably necessary to deliver the services, you grant
                  us a limited licence to use the materials you provide. Unless
                  confidentiality terms or a written agreement prevent it, we
                  may identify you as a client and display completed public work
                  in our portfolio, case studies, awards, and promotional
                  materials.
                </p>
              </section>

              <section
                className="py-10"
                aria-labelledby="third-party-services"
              >
                <h2 id="third-party-services" className={articleHeadingClass}>
                  7. Third-party services
                </h2>
                <p className={paragraphClass}>
                  A project may use third-party platforms, hosting, software,
                  fonts, stock assets, advertising networks, payment services,
                  APIs, or open-source components. Their own terms, licences,
                  pricing, and privacy practices apply. Unless expressly
                  included in our scope, you are responsible for maintaining
                  required subscriptions and accounts.
                </p>
                <p className={paragraphClass}>
                  We are not responsible for a third party&apos;s outage, policy
                  change, price change, suspension, data loss, or discontinuation,
                  but we will take reasonable care when selecting and integrating
                  services within our agreed scope.
                </p>
              </section>

              <section className="py-10" aria-labelledby="acceptable-use">
                <h2 id="acceptable-use" className={articleHeadingClass}>
                  8. Acceptable use
                </h2>
                <p className={paragraphClass}>
                  You must not use our website, services, or deliverables to:
                </p>
                <ul className={listClass}>
                  <li>break any applicable law or infringe another person&apos;s rights;</li>
                  <li>
                    distribute malware, attempt unauthorised access, disrupt a
                    system, or bypass security controls;
                  </li>
                  <li>
                    send deceptive, abusive, defamatory, discriminatory, or
                    unlawful content; or
                  </li>
                  <li>
                    copy, scrape, reverse engineer, or commercially exploit this
                    website except where the law expressly permits it.
                  </li>
                </ul>
              </section>

              <section className="py-10" aria-labelledby="confidentiality">
                <h2 id="confidentiality" className={articleHeadingClass}>
                  9. Confidentiality
                </h2>
                <p className={paragraphClass}>
                  Each party will use reasonable care to protect non-public
                  information received from the other and will use it only for
                  the engagement. This does not apply to information that is
                  already public through no breach, was lawfully known, is
                  independently developed, or must be disclosed by law. More
                  specific confidentiality obligations in a written agreement
                  take priority.
                </p>
              </section>

              <section className="py-10" aria-labelledby="warranties">
                <h2 id="warranties" className={articleHeadingClass}>
                  10. Warranties and liability
                </h2>
                <p className={paragraphClass}>
                  We will perform agreed services with reasonable care and
                  skill. Unless expressly promised in writing, we do not
                  guarantee a particular commercial result, audience response,
                  search position, advertising performance, uptime, or outcome
                  from a third-party platform.
                </p>
                <p className={paragraphClass}>
                  The website is provided on an &ldquo;as available&rdquo; basis. To
                  the extent permitted by law, we exclude implied warranties and
                  are not liable for indirect, incidental, special,
                  consequential, or lost-profit damages. Our total liability for
                  a service engagement will not exceed the fees paid to us for
                  the service giving rise to the claim during the six months
                  before the event, unless applicable law does not allow that
                  limitation.
                </p>
                <p className={paragraphClass}>
                  Nothing in these Terms excludes liability that cannot legally
                  be excluded or limited.
                </p>
              </section>

              <section className="py-10" aria-labelledby="termination">
                <h2 id="termination" className={articleHeadingClass}>
                  11. Termination
                </h2>
                <p className={paragraphClass}>
                  We may suspend or end access to the website or services if you
                  materially breach these Terms, fail to pay an undisputed
                  amount, misuse our systems, or create a legal or security risk.
                  Where practical, we will give notice and a reasonable
                  opportunity to correct the issue.
                </p>
                <p className={paragraphClass}>
                  Provisions concerning payment, confidentiality, intellectual
                  property, liability, and dispute resolution continue after an
                  engagement ends where their nature requires it.
                </p>
              </section>

              <section className="py-10" aria-labelledby="governing-law">
                <h2 id="governing-law" className={articleHeadingClass}>
                  12. Governing law
                </h2>
                <p className={paragraphClass}>
                  These Terms are governed by the laws of Nepal. Before starting
                  formal proceedings, each party agrees to make a good-faith
                  effort to resolve a dispute through direct discussion. If a
                  resolution cannot be reached, the courts with jurisdiction in
                  Nepal will have authority, subject to any different dispute
                  process in a project-specific agreement.
                </p>
              </section>

              <section className="py-10" aria-labelledby="updates">
                <h2 id="updates" className={articleHeadingClass}>
                  13. Updates to these terms
                </h2>
                <p className={paragraphClass}>
                  We may update these Terms to reflect changes to our services,
                  business practices, or legal obligations. The revised version
                  will appear on this page with a new &ldquo;Last updated&rdquo; date.
                  Material changes will apply prospectively unless the law
                  requires otherwise. Continued use of the website after an
                  update means you accept the revised Terms.
                </p>
              </section>

              <section className="pt-10" aria-labelledby="contact">
                <h2 id="contact" className={articleHeadingClass}>
                  14. Contact us
                </h2>
                <p className={paragraphClass}>
                  Questions about these Terms can be sent to us using the
                  details below.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
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
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
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
                        {siteConfig.address.addressRegion}, Nepal {siteConfig.address.postalCode}
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
