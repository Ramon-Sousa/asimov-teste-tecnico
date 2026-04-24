import Navbar from "./components/Navbar";
import Mockup from "./components/Mockup";
import Bullets from "./components/Bullets";

export default function HeroSection() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero Content ── */}
      <section
        className="flex flex-col items-center"
        style={{ paddingTop: "52px" }}
        aria-labelledby="hero-title"
      >
        {/* Text Block – Figma: 917px wide, vertical auto layout, gap 8px */}
        <div
          className="flex flex-col items-center mx-auto px-8 lg:px-0 order-1"
          style={{
            maxWidth: "917px",
            width: "100%",
            gap: "8px",
          }}
        >
          {/* Title – Figma: Rethink Sans Medium 60px, lineHeight intrinsic (78.12px) */}
          <h1
            id="hero-title"
            className="text-center lg:text-[60px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: 1.302, /* 78.12 / 60 */
              color: "#FFFFFF",
              letterSpacing: "0px",
            }}
          >
            Aprenda{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "#FF6D0B",
              }}
            >
              Python do zero
            </em>{" "}
            e construa projetos reais com IA
          </h1>

          {/* Subtitle – Figma: Inter 20px/28px, #69727D, center */}
          <p
            className="text-center w-full lg:text-[20px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "#69727D",
              letterSpacing: "0px",
            }}
          >
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação
          </p>
        </div>

        {/* CTA Buttons – Figma: gap 24px, margin-top 56px */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center w-full px-8 order-2"
          style={{
            gap: "24px",
            marginTop: "56px",
          }}
        >
          {/* Primary – Figma (18:1791): filled #85E8EA, text #060607, px 32, h 46, pill */}
          <button
            type="button"
            className="flex items-center justify-center w-full sm:w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{
              paddingLeft: "32px",
              paddingRight: "32px",
              height: "46px",
              borderRadius: "999px",
              backgroundColor: "#85E8EA",
              color: "#060607",
              border: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "28px",
                whiteSpace: "nowrap",
              }}
            >
              Quero começar agora
            </span>
          </button>

          {/* Secondary – Figma (18:1792): outlined #85E8EA, text #85E8EA, px 24, h 46, pill */}
          <button
            type="button"
            className="flex items-center justify-center w-full sm:w-auto cursor-pointer hover:bg-[rgba(133,232,234,0.08)] transition-colors duration-200"
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
              height: "46px",
              borderRadius: "999px",
              backgroundColor: "transparent",
              border: "1px solid #85E8EA",
              color: "#85E8EA",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "28px",
                whiteSpace: "nowrap",
              }}
            >
              Ver o que vou aprender
            </span>
          </button>
        </div>

        {/* Bullets – Figma: margin-top 56px */}
        <div 
          className="flex justify-center w-full order-4 lg:order-3" 
          style={{ marginTop: "56px" }}
        >
          <Bullets />
        </div>

        {/* Mockup – Figma: margin-top 56px, centered, 1240px max */}
        <div
          className="w-full mx-auto order-3 lg:order-4"
          style={{
            marginTop: "56px",
            paddingLeft: "clamp(32px, 7vw, 100px)",
            paddingRight: "clamp(32px, 7vw, 100px)",
            maxWidth: "1440px",
          }}
        >
          <Mockup />
        </div>
      </section>
    </main>
  );
}
