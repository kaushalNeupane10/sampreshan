"use client";

import React, { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  backgroundGradient?: string;
  particleColors?: string[];
  lineColor?: string;
  particleCount?: number;
  interactionRadius?: number;
}

export default function ParticleNetwork({
  backgroundGradient = "linear-gradient(135deg, #101c3a 0%, #4169e1 50%, #ff8c00 100%)",
  particleColors = ["#FFFFFF", "#87CEFA", "#FFD700", "#FFA500"],
  lineColor = "rgb(255, 255, 255)",
  particleCount = 120,
  interactionRadius = 150,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = {
      x: -1000,
      y: -1000,
      isActive: false,
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      angle: number;
      orbitSpeed: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.orbitSpeed = Math.random() * 0.001 + 0.0005;
        this.color =
          particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      update() {
        const centerX = width / 2;
        const centerY = height / 2;

        if (!mouse.isActive) {
          const dx = this.baseX - centerX;
          const dy = this.baseY - centerY;
          const radius = Math.sqrt(dx * dx + dy * dy);

          let currentAngle = Math.atan2(dy, dx);
          currentAngle += this.orbitSpeed;

          this.baseX = centerX + Math.cos(currentAngle) * radius;
          this.baseY = centerY + Math.sin(currentAngle) * radius;
        }

        let targetX = this.baseX;
        let targetY = this.baseY;

        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < interactionRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;

            const force = (interactionRadius - distance) / interactionRadius;

            targetX = this.baseX - forceDirectionX * force * 100;
            targetY = this.baseY - forceDirectionY * force * 100;
          }
        }

        this.x += (targetX - this.x) * 0.05;
        this.y += (targetY - this.y) * 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = 1 - distance / 120;

            ctx.strokeStyle = lineColor
              .replace(")", `, ${opacity})`)
              .replace("rgb", "rgba");
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseout", handleMouseLeave);

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
    // Notice the .join(',') below to safely handle the array dependency
  }, [
    backgroundGradient,
    particleColors.join(","),
    lineColor,
    particleCount,
    interactionRadius,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        background: backgroundGradient,
      }}
    />
  );
}
