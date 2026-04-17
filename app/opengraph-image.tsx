import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Belteshazzar Marquez — Full-Stack Developer · AI SaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Emerald glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0.08) 45%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Top row — status chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#10b981",
              display: "flex",
              boxShadow: "0 0 12px rgba(16,185,129,0.6)",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "22px",
              color: "#a1a1aa",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Open to remote · freelance
          </span>
        </div>

        {/* Main stack — name + headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              display: "flex",
            }}
          >
            Belteshazzar
          </div>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              display: "flex",
            }}
          >
            Marquez
          </div>
          <div
            style={{
              fontSize: "38px",
              color: "#a1a1aa",
              marginTop: "28px",
              fontWeight: 400,
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <span style={{ display: "flex" }}>I build</span>
            <span style={{ color: "#10b981", fontWeight: 600, display: "flex" }}>
              AI-powered SaaS, agents, RAG systems,
            </span>
            <span style={{ display: "flex" }}>and the operator tools that ship them.</span>
          </div>
        </div>

        {/* Footer row — site + github */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            fontSize: "26px",
            color: "#a1a1aa",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <span style={{ display: "flex", fontWeight: 500, color: "#fafafa" }}>
            biiieem.dev
          </span>
          <span style={{ display: "flex" }}>github.com/dGreatNoob</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
