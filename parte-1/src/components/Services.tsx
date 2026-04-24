import Image from "next/image";

type CardVariant = "grey" | "green" | "dark";

interface ServiceCard {
  title: string[];
  variant: CardVariant;
  illustration: string;
  illustrationAlt: string;
}

const SERVICES: ServiceCard[] = [
  {
    title: ["Search engine", "optimization"],
    variant: "grey",
    illustration: "/services-01.png",
    illustrationAlt: "SEO illustration",
  },
  {
    title: ["Pay-per-click", "advertising"],
    variant: "green",
    illustration: "/services-02.png",
    illustrationAlt: "PPC illustration",
  },
  {
    title: ["Social Media", "Marketing"],
    variant: "dark",
    illustration: "/services-03.png",
    illustrationAlt: "Social media illustration",
  },
  {
    title: ["Email", "Marketing"],
    variant: "grey",
    illustration: "/services-04.png",
    illustrationAlt: "Email marketing illustration",
  },
  {
    title: ["Content", "Creation"],
    variant: "green",
    illustration: "/services-05.png",
    illustrationAlt: "Content creation illustration",
  },
  {
    title: ["Analytics and", "Tracking"],
    variant: "dark",
    illustration: "/services-06.png",
    illustrationAlt: "Analytics illustration",
  },
];

const variantConfig: Record<
  CardVariant,
  { bg: string; labelBg: string; linkColor: string; iconSrc: string }
> = {
  grey: {
    bg: "bg-grey",
    labelBg: "bg-green",
    linkColor: "text-black",
    iconSrc:
      "/icon-1.png",
  },
  green: {
    bg: "bg-green",
    labelBg: "bg-white",
    linkColor: "text-black",
    iconSrc:
      "/icon-2.png",
  },
  dark: {
    bg: "bg-dark",
    labelBg: "bg-white",
    linkColor: "text-white",
    iconSrc:
      "/icon-3.png",
  },
};

export default function Services() {
  return (
    <section className="px-5 md:px-container flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SERVICES.map((service, i) => {
          const config = variantConfig[service.variant];
          return (
            <div
              key={i}
              className={`group ${config.bg} border border-dark rounded-card shadow-card p-10 md:p-12 flex items-center justify-between overflow-hidden min-h-[180px] md:min-h-[310px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_0px_0px_var(--color-dark)]`}
            >
              {/* Left: title + icon */}
              <div className="flex flex-col justify-between h-full gap-10 md:gap-24 items-start">
                {/* Title lines */}
                <div className="flex flex-col items-start">
                  {service.title.map((line, li) => (
                    <span
                      key={li}
                      className={`${config.labelBg} rounded-tag px-1.5 font-medium text-xl md:text-3xl leading-snug text-black`}
                    >
                      {line}
                    </span>
                  ))}
                </div>

                {/* Mobile: icon only. Desktop: icon + label */}
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:rotate-[30deg]">
                    <Image
                      src={config.iconSrc}
                      alt="Learn more"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className={`hidden md:inline text-xl leading-7 ${config.linkColor} whitespace-nowrap`}>
                    Learn more
                  </span>
                </div>
              </div>

              {/* Right: illustration — mobile shows small, desktop shows full */}
              <div className="shrink-0 flex items-center justify-center w-24 md:w-52 transition-transform duration-300 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.illustration}
                  alt={service.illustrationAlt}
                  className="w-full max-h-24 md:max-h-52 object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
