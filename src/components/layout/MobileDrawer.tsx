"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/config/navConfig";
import { useLockBodyScroll } from "@/hook/common/useLockBodyScroll";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  useLockBodyScroll(open);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-neutral-900/55 backdrop-blur-sm transition-opacity duration-200 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[82%] max-w-sm flex-col border-r border-border bg-bg-surface shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-border bg-bg-surface">
              <Image
                src="/logo/Sampresan.png"
                alt="Sampreshan"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>

            <div>
              <h2 className="text-base font-bold text-text-heading">
                Sampreshan
              </h2>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                Media
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-text-body transition-colors duration-200 hover:bg-brand-subtle hover:text-brand"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto p-4"
        >
          <ul className="space-y-2">
            {MAIN_NAVIGATION.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${active ? "bg-brand-subtle text-brand" : "text-text-body hover:bg-bg-sunken hover:text-brand"}`}
                  >
                    {Icon && <Icon size={18} className="shrink-0" />}

                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-5 py-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Sampreshan Media. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
