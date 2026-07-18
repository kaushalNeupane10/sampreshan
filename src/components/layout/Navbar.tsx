"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MAIN_NAVIGATION } from "@/config/navConfig";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine when navbar should be transparent
  const transparent = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${
          transparent
            ? "border-transparent bg-transparent shadow-none"
            : "border-b border-border/60 bg-bg-surface/80 backdrop-blur-xl shadow-sm supports-backdrop-filter:bg-bg-surface/70"
        }`}
      >
        <div className="container-custom mx-auto flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="group flex shrink-0 items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-border bg-bg-surface shadow-sm transition-all duration-200 group-hover:border-brand group-hover:shadow-brand">
                <Image
                  src="/logo/Sampresan.png"
                  alt="Sampreshan"
                  fill
                  priority
                  sizes="44px"
                  className="object-contain p-1"
                />
              </div>

              <div className="hidden min-[360px]:block">
                <h1
                  className={`text-lg font-black transition-colors duration-300 ${
                    transparent
                      ? "text-white"
                      : "text-text-heading group-hover:text-brand"
                  }`}
                >
                  Sampreshan
                </h1>
                <p
                  className={`text-[11px] uppercase tracking-[0.25em] ${
                    transparent ? "text-white/70" : "text-text-muted"
                  }`}
                >
                  Media
                </p>
              </div>
            </Link>
          </div>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-10 md:flex"
          >
            {MAIN_NAVIGATION.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
                  after:origin-center after:scale-x-0 after:bg-brand
                  after:transition-transform after:duration-300
                  ${
                    active
                      ? transparent
                        ? "text-white after:scale-x-100"
                        : "text-brand after:scale-x-100"
                      : transparent
                        ? "text-white/90 hover:text-white hover:after:scale-x-100"
                        : "text-text-body hover:text-brand hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Future CTA / Login Button (Hidden on mobile, flex on desktop) */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Your future button goes here */}
            </div>

            {/* Mobile Menu Button (Moved here, shows on mobile, hidden on desktop) */}
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-surface text-text-body transition1-all duration-200 hover:border-brand hover:bg-brand-subtle hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/20 md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
