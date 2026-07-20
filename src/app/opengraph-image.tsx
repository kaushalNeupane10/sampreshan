import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

export const alt = "Sampreshan Media — Creative and technology agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        color: "white",
        background:
          "radial-gradient(circle at 85% 15%, #3359ff 0, transparent 38%), linear-gradient(135deg, #000743 0%, #002395 62%, #0f172a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 30,
          fontWeight: 800,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 54,
            height: 54,
            borderRadius: 16,
            color: "#000743",
            background: "#ff9900",
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          S
        </div>
        Sampreshan Media
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            maxWidth: 950,
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 900,
          }}
        >
          Creative ideas. Digital products. Measurable growth.
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)" }}>
          Branding · Marketing · Video · Web · Mobile · IT Solutions
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "rgba(255,255,255,0.62)",
        }}
      >
        <span>Bharatpur, Nepal</span>
        <span>{new URL(siteConfig.url).hostname}</span>
      </div>
    </div>,
    size,
  );
}
