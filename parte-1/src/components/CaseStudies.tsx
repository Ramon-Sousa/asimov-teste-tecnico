import Image from "next/image";

const CASES = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <section className="px-5 md:px-container">
      <div className="bg-dark rounded-card px-8 md:px-16 py-12 md:py-18 flex flex-col md:flex-row items-start gap-10 md:gap-16">
        {CASES.map((text, i) => (
          <div
            key={i}
            className="group flex flex-col gap-5 items-start flex-1 relative cursor-pointer"
          >
            <p className="text-base md:text-lg leading-snug text-white">
              {text}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xl leading-7 text-green whitespace-nowrap group-hover:underline underline-offset-4 transition-all duration-200">
                Learn more
              </span>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <Image
                  src="/icon-arrow.png"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
            </div>
            {/* Vertical divider */}
            {i < CASES.length - 1 && (
              <div className="hidden md:block absolute -right-8 top-0 bottom-0 w-px bg-white/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
