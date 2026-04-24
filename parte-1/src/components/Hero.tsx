import LinkButton from "@/components/ui/LinkButton";

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-5 md:px-container overflow-hidden py-2.5 md:py-0">
      {/* Mobile: column layout h1 → illustration → description → button */}
      {/* Desktop: row layout left content | right illustration */}
      <div className="flex flex-col w-full md:flex-row md:items-center md:justify-between">

        {/* h1 — always first */}
        <h1 className="font-medium text-4xl md:text-6xl leading-tight text-black text-left md:hidden mb-6">
          Navigating the digital landscape for success
        </h1>

        {/* Left content block — desktop only includes h1 */}
        <div className="flex flex-col gap-9 items-start max-w-lg z-10">
          <h1 className="hidden md:block font-medium text-6xl leading-tight text-black">
            Navigating the digital landscape for success
          </h1>

          {/* Mobile illustration — between h1 and description */}
          <div className="md:hidden w-full flex items-center justify-center -mt-2 mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/illustration-hero.png"
              alt="Digital marketing illustration"
              className="w-full max-w-sm object-contain"
            />
          </div>

          <p className="text-base md:text-xl leading-7 text-black max-w-xl text-left">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <LinkButton href="#contact" variant="primary" className="w-full md:w-auto text-center">
            Book a consultation
          </LinkButton>
        </div>

        {/* Desktop illustration */}
        <div className="hidden md:flex shrink-0 items-center justify-center w-[600px] h-[515px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustration-hero.png"
            alt="Digital marketing illustration"
            className="w-2/4 md:w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
