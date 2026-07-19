import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAVIGATION } from "@/config/navConfig";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const SERVICES = [
  { label: "Graphic Design", href: "#" },
  { label: "Digital Marketing", href: "#" },
  { label: "Video Production", href: "#" },
  { label: "Web Development", href: "#" },
  { label: "IT Solutions", href: "#" },
];

const LEGAL = [
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/Sampreshanmedia",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sampreshanmedia/",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@sampreshan6?lang=en",
    label: "Tiktok",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-surface text-text-body transition-colors duration-300">
      {/* Top Graphic Accent Bar */}
      <div className="h-[4px] w-full bg-brand" />

      {/* Main Container */}
      <div className="mx-auto max-w-(--container-width) px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          {/* Brand & Identity Column */}
          <div className="flex flex-col gap-6 md:max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold tracking-tight text-text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-lg p-1.5 shadow-sm">
                <Image
                  src="/logo/Sampresan.png"
                  alt="Sampreshan Media Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-weight-bold">Sampreshan Media</span>
            </Link>

            <p className="text-sm leading-relaxed text-text-muted text-pretty">
              A premium creative and technology agency offering innovative
              graphic design, digital marketing, video production, web
              development, and structural IT solutions.
            </p>

            {/* Premium Social Links Wrapper */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-surface text-text-muted transition-all duration-300 hover:border-brand hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon className="h-[16px] w-[16px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-weight-bold tracking-wider text-text-heading uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-text-body transition-colors duration-200 hover:text-brand underline-offset-4 decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Dynamic Navigation with Custom Icons) */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-weight-bold tracking-wider text-text-heading uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 text-sm text-text-body transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4 text-text-muted transition-colors duration-200 group-hover:text-brand" />
                    )}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Metadata Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-weight-bold tracking-wider text-text-heading uppercase">
              Legal & Support
            </h3>
            <ul className="flex flex-col gap-3.5">
              {LEGAL.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-text-body transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Production-grade Bottom Anchor Banner */}
      <div className="border-t border-border-subtle bg-bg-sunken">
        <div className="mx-auto flex max-w-(--container-width) flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-text-muted">
          <div>&copy; {currentYear} Sampreshan Media. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="font-weight-medium text-text-heading">
              Creative & technology partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
