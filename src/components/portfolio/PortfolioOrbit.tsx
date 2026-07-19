"use client";

import type { PointerEvent, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { Camera, Drone } from "lucide-react";
import { SiDjango, SiFlutter, SiNextdotjs, SiPython } from "react-icons/si";

interface Tool {
  key: string;
  label: string;
  discipline: string;
  accent: string;
  visual: ReactNode;
}

const tools: Tool[] = [
  {
    key: "flutter",
    label: "Flutter",
    discipline: "Mobile experiences",
    accent: "text-sky-400",
    visual: <SiFlutter className="h-7 w-7" aria-hidden="true" />,
  },
  {
    key: "python",
    label: "Python",
    discipline: "Digital products",
    accent: "text-amber-300",
    visual: <SiPython className="h-7 w-7" aria-hidden="true" />,
  },
  {
    key: "django",
    label: "Django",
    discipline: "Web platforms",
    accent: "text-emerald-400",
    visual: <SiDjango className="h-7 w-7" aria-hidden="true" />,
  },
  {
    key: "nextjs",
    label: "Next.js",
    discipline: "Web applications",
    accent: "text-white",
    visual: <SiNextdotjs className="h-7 w-7" aria-hidden="true" />,
  },
  {
    key: "after-effects",
    label: "After Effects",
    discipline: "Motion design",
    accent: "text-violet-300",
    visual: (
      <span className="text-lg font-black tracking-tight" aria-hidden="true">
        Ae
      </span>
    ),
  },
  {
    key: "photoshop",
    label: "Photoshop",
    discipline: "Graphic design",
    accent: "text-sky-300",
    visual: (
      <span className="text-lg font-black tracking-tight" aria-hidden="true">
        Ps
      </span>
    ),
  },
  {
    key: "illustrator",
    label: "Illustrator",
    discipline: "Brand identities",
    accent: "text-orange-300",
    visual: (
      <span className="text-lg font-black tracking-tight" aria-hidden="true">
        Ai
      </span>
    ),
  },
  {
    key: "premiere-pro",
    label: "Premiere Pro",
    discipline: "Film editing",
    accent: "text-fuchsia-300",
    visual: (
      <span className="text-lg font-black tracking-tight" aria-hidden="true">
        Pr
      </span>
    ),
  },
  {
    key: "drone",
    label: "Drone",
    discipline: "Aerial production",
    accent: "text-accent",
    visual: <Drone className="h-7 w-7" aria-hidden="true" />,
  },
  {
    key: "camera",
    label: "Camera",
    discipline: "Visual storytelling",
    accent: "text-blue-300",
    visual: <Camera className="h-7 w-7" aria-hidden="true" />,
  },
];

function ToolVisual({ tool }: { tool: Tool }) {
  return tool.visual;
}

export default function PortfolioOrbit() {
  const [activeKey, setActiveKey] = useState(tools[0].key);
  const activeTool = tools.find((tool) => tool.key === activeKey) ?? tools[0];

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty(
      "--orbit-tilt-x",
      `${horizontal * 7}deg`,
    );
    event.currentTarget.style.setProperty(
      "--orbit-tilt-y",
      `${vertical * -7}deg`,
    );
  };

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--orbit-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--orbit-tilt-y", "0deg");
  };

  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-8 lg:py-0">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        className="relative h-[19rem] w-[19rem] transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:h-[26rem] sm:w-[26rem] lg:h-[32rem] lg:w-[32rem]"
        style={{
          transform:
            "perspective(1000px) rotateX(var(--orbit-tilt-y, 0deg)) rotateY(var(--orbit-tilt-x, 0deg))",
        }}
        aria-label="Our design, video editing, and development toolkit"
      >
        <div className="absolute inset-[12%] rounded-full border border-white/15" />
        <div className="absolute inset-[24%] rounded-full border border-dashed border-white/15 animate-[spin_28s_linear_infinite] motion-reduce:animate-none" />
        <div className="absolute inset-[36%] rounded-full bg-brand-500/15 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-neutral-950/80 p-4 text-center text-white shadow-2xl backdrop-blur-xl sm:h-40 sm:w-40">
          <div className="relative mb-2 h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white p-1 shadow-md sm:h-12 sm:w-12">
            <Image
              src="/logo/Sampresan.png"
              alt=""
              fill
              sizes="48px"
              className="object-contain p-1"
            />
          </div>

          <p className="text-[10px] font-bold tracking-[0.18em] text-accent uppercase">
            {activeTool.discipline}
          </p>
          <p className="mt-1 text-sm font-black sm:text-base">
            {activeTool.label}
          </p>
        </div>

        {tools.map((tool, index) => {
          const angle = -90 + index * (360 / tools.length);
          const active = tool.key === activeKey;

          return (
            <div
              key={tool.key}
              className="group absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(clamp(7.5rem, 17vw, 12.5rem)) rotate(${-angle}deg)`,
              }}
            >
              <button
                type="button"
                aria-label={`${tool.label}: ${tool.discipline}`}
                aria-pressed={active}
                onClick={() => setActiveKey(tool.key)}
                onMouseEnter={() => setActiveKey(tool.key)}
                onFocus={() => setActiveKey(tool.key)}
                className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border shadow-xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-110 focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent motion-reduce:transition-none sm:h-16 sm:w-16 ${
                  active
                    ? "scale-110 border-accent bg-neutral-900 ring-4 ring-accent/15"
                    : "border-white/15 bg-neutral-950/75 hover:border-white/35"
                } ${tool.accent}`}
              >
                <ToolVisual tool={tool} />
              </button>

              <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-white/10 bg-neutral-950/90 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {tool.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
