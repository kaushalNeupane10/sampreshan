"use client";

import { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  backgroundGradient?: string;
  particleColors?: string[];
  lineColor?: string;
  particleCount?: number;
  interactionRadius?: number;
}

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number;
  phase: number;
  color: string;
  accent: boolean;
  star: boolean;
  hoverEnergy: number;
}

const TAU = Math.PI * 2;
const MAX_SPEED = 0.085;

export default function ParticleNetwork({
  backgroundGradient =
    "linear-gradient(120deg, #020923 0%, #06226f 58%, #0a3aa5 100%)",
  particleColors = ["#ffffff", "#a9ceff", "#79a8ff", "#ffb74d"],
  lineColor = "255, 255, 255",
  particleCount = 148,
  interactionRadius = 175,
}: ParticleNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!container || !canvas || !context) return;

    let width = 0;
    let height = 0;
    let nodes: NodeParticle[] = [];
    let animationFrameId = 0;
    let previousTime = performance.now();
    let elapsed = 0;
    let isVisible = true;
    let pageVisible = !document.hidden;

    const processorCount = navigator.hardwareConcurrency || 4;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowPowerDevice = processorCount <= 4 || coarsePointer;
    const highPowerDevice = processorCount >= 10 && !coarsePointer;
    const connectionDistance = lowPowerDevice ? 148 : highPowerDevice ? 176 : 162;
    const connectionLimit = lowPowerDevice ? 5 : highPowerDevice ? 9 : 7;
    const pixelRatioLimit = lowPowerDevice ? 1.3 : highPowerDevice ? 1.9 : 1.6;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let reduceMotion = motionPreference.matches;

    const pointer = {
      x: -1000,
      y: -1000,
      smoothX: -1000,
      smoothY: -1000,
      velocity: 0,
      previousX: -1000,
      previousY: -1000,
      active: false,
    };

    const rgbValues = lineColor.match(/[\d.]+/g)?.slice(0, 3);
    const lineRgb = rgbValues?.length === 3 ? rgbValues.join(", ") : "255, 255, 255";

    const createNode = (): NodeParticle => {
      const accent = Math.random() < 0.2;
      const star = Math.random() < 0.28;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.025,
        vy: (Math.random() - 0.5) * 0.025,
        radius: star ? Math.random() * 1.4 + 1.65 : Math.random() * 1.5 + 0.78,
        depth: Math.random() * 0.68 + 0.32,
        phase: Math.random() * TAU,
        color: accent
          ? Math.random() < 0.5
            ? "#ff9900"
            : "#ffc05c"
          : particleColors[Math.floor(Math.random() * particleColors.length)],
        accent,
        star,
        hoverEnergy: 0,
      };
    };

    const resetNodes = () => {
      const areaRatio = Math.min(1, (width * height) / (1440 * 900));
      const deviceLimit = lowPowerDevice ? 108 : highPowerDevice ? 168 : 138;
      const responsiveCount = Math.min(
        deviceLimit,
        Math.max(72, Math.round(particleCount * (0.72 + areaRatio * 0.28))),
      );
      nodes = Array.from({ length: responsiveCount }, createNode);
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        pixelRatioLimit,
      );
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      resetNodes();
    };

    const drawCornerWaves = () => {
      context.save();

      // Small cool liquid fold in the top-right corner.
      for (let layer = 0; layer < 3; layer += 1) {
        const phase = elapsed * (0.00018 + layer * 0.000025) + layer * 1.8;
        const startX = width * (0.65 + layer * 0.035);
        const depth = height * (0.09 + layer * 0.035);
        const gradient = context.createLinearGradient(startX, 0, width, depth);
        gradient.addColorStop(0, "rgba(73, 128, 255, 0)");
        gradient.addColorStop(
          0.58,
          `rgba(${74 + layer * 18}, ${132 + layer * 12}, 255, ${0.1 - layer * 0.018})`,
        );
        gradient.addColorStop(1, "rgba(155, 199, 255, 0.03)");

        context.beginPath();
        context.moveTo(startX, 0);
        context.bezierCurveTo(
          width * 0.75,
          depth * (0.9 + Math.sin(phase) * 0.15),
          width * 0.88,
          depth * (1.45 + Math.cos(phase) * 0.18),
          width,
          depth * (0.72 + Math.sin(phase * 0.8) * 0.14),
        );
        context.lineTo(width, 0);
        context.closePath();
        context.fillStyle = gradient;
        context.fill();
        context.strokeStyle = `rgba(132, 178, 255, ${0.17 - layer * 0.035})`;
        context.lineWidth = 0.7;
        context.stroke();
      }

      // A warmer, smaller counter-wave in the lower-right corner.
      for (let layer = 0; layer < 3; layer += 1) {
        const phase = elapsed * (0.00014 + layer * 0.00002) + layer * 2.2;
        const startX = width * (0.72 + layer * 0.035);
        const rise = height * (0.08 + layer * 0.03);
        const gradient = context.createLinearGradient(startX, height, width, height - rise);
        gradient.addColorStop(0, "rgba(255, 145, 0, 0)");
        gradient.addColorStop(
          0.62,
          `rgba(255, ${145 + layer * 17}, ${15 + layer * 25}, ${0.085 - layer * 0.014})`,
        );
        gradient.addColorStop(1, "rgba(91, 140, 255, 0.025)");

        context.beginPath();
        context.moveTo(startX, height);
        context.bezierCurveTo(
          width * 0.8,
          height - rise * (0.75 + Math.sin(phase) * 0.16),
          width * 0.91,
          height - rise * (1.3 + Math.cos(phase) * 0.16),
          width,
          height - rise * (0.62 + Math.sin(phase * 0.7) * 0.13),
        );
        context.lineTo(width, height);
        context.closePath();
        context.fillStyle = gradient;
        context.fill();
        context.strokeStyle = `rgba(255, 174, 61, ${0.14 - layer * 0.028})`;
        context.lineWidth = 0.65;
        context.stroke();
      }

      context.restore();
    };

    const updateNodes = (delta: number) => {
      if (reduceMotion) return;

      const frameScale = Math.min(delta, 32);

      nodes.forEach((node) => {
        // Neighboring nodes share this field, creating liquid rather than random motion.
        const flowX =
          Math.cos(node.y * 0.0048 + elapsed * 0.00017) * 0.000018 +
          Math.sin(node.x * 0.0022 - elapsed * 0.0001) * 0.000011;
        const flowY =
          Math.sin(node.x * 0.0041 - elapsed * 0.00015) * 0.000017 +
          Math.cos(node.y * 0.0026 + elapsed * 0.00008) * 0.00001;

        node.vx += flowX * frameScale * node.depth;
        node.vy += flowY * frameScale * node.depth;

        if (pointer.active) {
          const dx = node.x - pointer.smoothX;
          const dy = node.y - pointer.smoothY;
          const distance = Math.hypot(dx, dy);

          if (distance > 0.1 && distance < interactionRadius) {
            const pressure = Math.pow(1 - distance / interactionRadius, 2);
            const motionBoost = Math.min(1.8, 0.55 + pointer.velocity * 0.04);
            const push = pressure * motionBoost * 0.0018 * frameScale;
            const swirl = pressure * 0.00045 * frameScale;

            node.vx += (dx / distance) * push - (dy / distance) * swirl;
            node.vy += (dy / distance) * push + (dx / distance) * swirl;
            node.hoverEnergy = Math.min(1, node.hoverEnergy + pressure * 0.14);
          }
        }

        // Friction makes each hover push bounce, settle and remain playful.
        node.vx *= Math.pow(0.985, frameScale / 16.67);
        node.vy *= Math.pow(0.985, frameScale / 16.67);

        const speed = Math.hypot(node.vx, node.vy);
        if (speed > MAX_SPEED) {
          node.vx = (node.vx / speed) * MAX_SPEED;
          node.vy = (node.vy / speed) * MAX_SPEED;
        }

        node.x += node.vx * frameScale * node.depth;
        node.y += node.vy * frameScale * node.depth;
        node.hoverEnergy *= Math.pow(0.94, frameScale / 16.67);

        // Soft boundary bounce keeps the field connected instead of teleporting.
        if (node.x < -8) {
          node.x = -8;
          node.vx = Math.abs(node.vx) * 0.86;
        } else if (node.x > width + 8) {
          node.x = width + 8;
          node.vx = -Math.abs(node.vx) * 0.86;
        }

        if (node.y < -8) {
          node.y = -8;
          node.vy = Math.abs(node.vy) * 0.86;
        } else if (node.y > height + 8) {
          node.y = height + 8;
          node.vy = -Math.abs(node.vy) * 0.86;
        }
      });
    };

    const drawConnections = () => {
      const columns = Math.ceil(width / connectionDistance) + 3;
      const spatialGrid = new Map<number, number[]>();

      nodes.forEach((node, index) => {
        const cellX = Math.floor(node.x / connectionDistance) + 1;
        const cellY = Math.floor(node.y / connectionDistance) + 1;
        const cellKey = cellX + cellY * columns;
        const cell = spatialGrid.get(cellKey);

        if (cell) cell.push(index);
        else spatialGrid.set(cellKey, [index]);
      });

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        const cellX = Math.floor(node.x / connectionDistance) + 1;
        const cellY = Math.floor(node.y / connectionDistance) + 1;
        let connections = 0;

        searchCells: for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
          for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
            const cellKey = cellX + offsetX + (cellY + offsetY) * columns;
            const candidates = spatialGrid.get(cellKey);
            if (!candidates) continue;

            for (const next of candidates) {
              if (next <= index) continue;

              const other = nodes[next];
              const dx = other.x - node.x;
              const dy = other.y - node.y;

              if (
                Math.abs(dx) > connectionDistance ||
                Math.abs(dy) > connectionDistance
              ) {
                continue;
              }

              const distance = Math.hypot(dx, dy);
              if (distance <= 0.1 || distance >= connectionDistance) continue;

              const proximity = 1 - distance / connectionDistance;
              const normalX = -dy / distance;
              const normalY = dx / distance;
              const wave =
                Math.sin(
                  elapsed * 0.0008 +
                    node.phase * 0.62 +
                    other.phase * 0.38 +
                    distance * 0.018,
                ) *
                (5 + proximity * 9);
              const middleX = (node.x + other.x) / 2;
              const middleY = (node.y + other.y) / 2;
              const pointerDistance = pointer.active
                ? Math.hypot(
                    middleX - pointer.smoothX,
                    middleY - pointer.smoothY,
                  )
                : Infinity;
              const hoverBend = Math.max(
                node.hoverEnergy,
                other.hoverEnergy,
                Math.max(0, 1 - pointerDistance / interactionRadius),
              );
              const controlX =
                middleX + normalX * wave * (1 + hoverBend * 1.4);
              const controlY =
                middleY + normalY * wave * (1 + hoverBend * 1.4);
              const textFade =
                0.4 + Math.min(1, middleX / (width * 0.7)) * 0.6;
              const pulse =
                0.8 +
                Math.sin(elapsed * 0.001 + node.phase + other.phase) * 0.2;
              const warmLink = node.accent || other.accent;

              context.beginPath();
              context.moveTo(node.x, node.y);
              context.quadraticCurveTo(controlX, controlY, other.x, other.y);
              context.strokeStyle = warmLink
                ? `rgba(255, 165, 37, ${proximity * textFade * pulse * (0.17 + hoverBend * 0.13)})`
                : `rgba(${lineRgb}, ${proximity * textFade * pulse * (0.155 + hoverBend * 0.11)})`;
              context.lineWidth = 0.52 + proximity * 0.5 + hoverBend * 0.26;
              context.stroke();

              connections += 1;
              if (connections >= connectionLimit) break searchCells;
            }
          }
        }
      }
    };

    const drawStar = (
      x: number,
      y: number,
      outerRadius: number,
      rotation: number,
    ) => {
      context.beginPath();

      for (let point = 0; point < 8; point += 1) {
        const radius = point % 2 === 0 ? outerRadius : outerRadius * 0.28;
        const angle = rotation + (point / 8) * TAU;
        const pointX = x + Math.cos(angle) * radius;
        const pointY = y + Math.sin(angle) * radius;

        if (point === 0) context.moveTo(pointX, pointY);
        else context.lineTo(pointX, pointY);
      }

      context.closePath();
    };

    const drawNodes = () => {
      context.save();

      nodes.forEach((node) => {
        context.globalAlpha = 1;
        context.shadowBlur = 0;
        const twinkle = 0.76 + Math.sin(elapsed * 0.0013 + node.phase) * 0.24;
        const bounce =
          1 +
          node.hoverEnergy *
            (0.65 + Math.sin(elapsed * 0.016 + node.phase) * 0.22);
        const radius = node.radius * twinkle * bounce;

        if (node.hoverEnergy > 0.08) {
          context.beginPath();
          context.arc(
            node.x,
            node.y,
            radius * (3.8 + node.hoverEnergy * 2.4),
            0,
            TAU,
          );
          context.strokeStyle = node.accent
            ? `rgba(255, 174, 55, ${node.hoverEnergy * 0.22})`
            : `rgba(132, 179, 255, ${node.hoverEnergy * 0.2})`;
          context.lineWidth = 0.7;
          context.stroke();
        }

        if (node.star) {
          context.beginPath();
          context.arc(node.x, node.y, radius * 3.1, 0, TAU);
          context.fillStyle = node.color;
          context.globalAlpha = 0.07 + node.hoverEnergy * 0.1;
          context.shadowBlur = 0;
          context.fill();

          drawStar(
            node.x,
            node.y,
            radius * 2.4,
            elapsed * 0.00028 + node.phase,
          );
        } else {
          context.beginPath();
          context.arc(node.x, node.y, radius, 0, TAU);
        }

        context.fillStyle = node.color;
        context.globalAlpha =
          (0.56 + node.depth * 0.38 + node.hoverEnergy * 0.06) * twinkle;
        context.shadowBlur = node.star
          ? (lowPowerDevice ? 5 : 8) + node.hoverEnergy * 9
          : node.hoverEnergy > 0.1
            ? 3 + node.hoverEnergy * 8
            : 0;
        context.shadowColor = node.color;
        context.fill();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      context.restore();
    };

    const drawPointerRipple = () => {
      if (!pointer.active || reduceMotion) return;

      context.save();
      const ripple = 0.5 + Math.sin(elapsed * 0.004) * 0.5;
      const radius = 22 + ripple * 9 + Math.min(18, pointer.velocity * 0.8);
      context.beginPath();
      context.arc(pointer.smoothX, pointer.smoothY, radius, 0, TAU);
      context.strokeStyle = `rgba(120, 169, 255, ${0.07 + ripple * 0.035})`;
      context.lineWidth = 0.7;
      context.stroke();

      context.beginPath();
      context.arc(pointer.smoothX, pointer.smoothY, radius * 0.58, 0, TAU);
      context.strokeStyle = `rgba(255, 168, 42, ${0.04 + (1 - ripple) * 0.025})`;
      context.lineWidth = 0.55;
      context.stroke();
      context.restore();
    };

    const render = (time: number) => {
      const delta = time - previousTime;
      previousTime = time;
      if (!reduceMotion) elapsed += delta;

      pointer.smoothX += (pointer.x - pointer.smoothX) * 0.11;
      pointer.smoothY += (pointer.y - pointer.smoothY) * 0.11;
      pointer.velocity *= 0.88;

      context.clearRect(0, 0, width, height);
      drawCornerWaves();
      updateNodes(delta);
      drawConnections();
      drawNodes();
      drawPointerRipple();

      if (isVisible && pageVisible && !reduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const renderStill = () => {
      cancelAnimationFrame(animationFrameId);
      previousTime = performance.now();
      render(previousTime);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const nextX = event.clientX - bounds.left;
      const nextY = event.clientY - bounds.top;

      if (pointer.active) {
        const movement = Math.hypot(
          nextX - pointer.previousX,
          nextY - pointer.previousY,
        );
        pointer.velocity = Math.min(40, pointer.velocity * 0.55 + movement * 0.45);
      } else {
        pointer.smoothX = nextX;
        pointer.smoothY = nextY;
      }

      pointer.x = nextX;
      pointer.y = nextY;
      pointer.previousX = nextX;
      pointer.previousY = nextY;
      pointer.active = true;
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget) return;
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
      pointer.velocity = 0;
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;

      if (reduceMotion) {
        renderStill();
      } else if (isVisible) {
        previousTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      pageVisible = !document.hidden;
      cancelAnimationFrame(animationFrameId);

      if (pageVisible && isVisible) {
        previousTime = performance.now();
        if (reduceMotion) renderStill();
        else animationFrameId = requestAnimationFrame(render);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) renderStill();
    });
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        cancelAnimationFrame(animationFrameId);

        if (!isVisible) return;

        previousTime = performance.now();
        if (reduceMotion) renderStill();
        else animationFrameId = requestAnimationFrame(render);
      },
      { threshold: 0.01 },
    );

    resize();
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionChange);

    if (reduceMotion) renderStill();
    else animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionPreference.removeEventListener("change", handleMotionChange);
    };
  }, [interactionRadius, lineColor, particleColors, particleCount]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ background: backgroundGradient }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 86% 24%, rgba(73, 132, 255, 0.25), transparent 31%), radial-gradient(circle at 88% 86%, rgba(255, 153, 0, 0.1), transparent 24%), linear-gradient(90deg, rgba(1, 7, 28, 0.6), rgba(3, 20, 67, 0.22) 48%, transparent 78%)",
        }}
      />
      {/* Lower-right abstract brand bloom — isolated so it can be kept or reverted. */}
      <div
        className="absolute -right-[14%] -bottom-[25%] h-[68%] w-[62%] opacity-70 blur-3xl"
        style={{
          background:
            "conic-gradient(from 218deg at 48% 42%, rgba(16, 67, 187, 0.08), rgba(61, 123, 255, 0.62) 24%, rgba(18, 62, 165, 0.24) 48%, rgba(255, 143, 0, 0.52) 69%, rgba(255, 185, 67, 0.2) 82%, rgba(20, 70, 184, 0.08))",
          borderRadius: "58% 42% 64% 36% / 44% 56% 42% 58%",
          transform: "rotate(-12deg)",
        }}
      />
      <div
        className="absolute -right-[4%] -bottom-[17%] h-[48%] w-[46%] opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 34% 36%, rgba(115, 167, 255, 0.5), transparent 36%), radial-gradient(ellipse at 69% 52%, rgba(255, 153, 0, 0.48), transparent 42%)",
          borderRadius: "42% 58% 48% 52% / 61% 38% 62% 39%",
          transform: "rotate(9deg)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-y-0 left-0 w-[64%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(1, 7, 27, 0.46), rgba(2, 14, 48, 0.15) 68%, transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{
          background: "linear-gradient(to top, rgba(1, 7, 26, 0.38), transparent)",
        }}
      />
    </div>
  );
}
