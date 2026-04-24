import LinkButton from "@/components/ui/LinkButton";

export default function CTABanner() {
  return (
    <section className="px-5 md:px-container py-10">
      <div className="bg-grey rounded-card flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-0 gap-6 relative min-h-[200px] md:min-h-[347px]">
        {/* Text + button */}
        <div className="flex flex-col gap-5 md:gap-7 items-start max-w-full md:max-w-lg z-10 py-10 md:py-16">
          <h3 className="font-medium text-2xl md:text-3xl leading-snug text-black">
            Let&apos;s make things happen
          </h3>
          <p className="text-base md:text-lg leading-snug text-black">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <LinkButton href="#contact" variant="primary" className="w-full md:w-auto">
            Get your free proposal
          </LinkButton>
        </div>

        {/* Illustration */}
        <div className="relative md:absolute md:right-16 md:top-1/2 md:-translate-y-1/2 z-0 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustration-card-cta.png"
            alt="CTA illustration"
            className="md:scale-110 lg:scale-125"
            style={{ width: "auto", height: 350, objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
