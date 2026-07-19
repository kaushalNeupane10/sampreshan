"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState({
    visible: false,
    progress: 0,
  });

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollState = () => {
      animationFrame = 0;

      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
          : 0;

      setScrollState({
        visible: scrollTop > SHOW_AFTER_PX,
        progress,
      });
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className={`fixed right-4 bottom-5 z-30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:right-6 sm:bottom-7 ${
        scrollState.visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
      aria-hidden={!scrollState.visible}
    >
      <button
        type="button"
        onClick={handleClick}
        tabIndex={scrollState.visible ? 0 : -1}
        aria-label="Scroll back to top"
        title="Back to top"
        style={{
          background: `conic-gradient(var(--color-accent) ${scrollState.progress * 3.6}deg, rgba(255, 255, 255, 0.28) 0deg)`,
        }}
        className="group grid h-12 w-12 place-items-center rounded-full p-0.5 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent active:translate-y-0 motion-reduce:transition-none sm:h-14 sm:w-14"
      >
        <span className="grid h-full w-full place-items-center rounded-full border border-white/15 bg-brand text-brand-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors duration-300 group-hover:bg-brand-dark">
          <ArrowUp
            className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
}
