const LOGOS = [
  { src: "/logos/amazon-logo.svg", alt: "Amazon", w: 124, h: 48 },
  { src: "/logos/dribbble-logo.svg", alt: "Dribbble", w: 126, h: 48 },
  { src: "/logos/hubspot-logo.svg", alt: "HubSpot", w: 129, h: 48 },
  { src: "/logos/notion-logo.svg", alt: "Notion", w: 146, h: 48 },
  { src: "/logos/netflix-logo.svg", alt: "Netflix", w: 125, h: 48 },
  { src: "/logos/zoom-logo.svg", alt: "Zoom", w: 111, h: 48 },
];

// Split into two rows for the mobile carousel
const ROW_1 = LOGOS.slice(0, 3);
const ROW_2 = LOGOS.slice(3);

export default function LogotypesBar() {
  return (
    <section className="py-10 overflow-hidden">
      {/* Mobile: infinite marquee in 2 rows */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Row 1 — left to right */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-12 animate-marquee-ltr whitespace-nowrap">
            {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="h-7 w-auto opacity-80 grayscale shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-12 animate-marquee-rtl whitespace-nowrap">
            {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="h-7 w-auto opacity-80 grayscale shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: static row — unchanged */}
      <div className="hidden md:flex px-container items-center justify-between gap-x-8 gap-y-6">
        {LOGOS.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-8 w-auto opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
