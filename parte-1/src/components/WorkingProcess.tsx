"use client";

import { useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We will conduct thorough market research to identify opportunities and develop a customized strategy aligned with your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team of experts will execute the strategy with precision, leveraging the latest tools and techniques to ensure maximum impact and results.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaign performance and make data-driven optimizations to improve results and maximize your return on investment.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "We provide transparent, detailed reports and maintain open communication so you always know how your campaigns are performing.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Our approach is never static. We continuously refine and improve our strategies based on performance data, market trends, and your evolving business goals.",
  },
];

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-5 md:px-container flex flex-col gap-8">
      {STEPS.map((step, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : i)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenIndex(isOpen ? null : i)}
            className={`${
              isOpen ? "bg-green" : "bg-grey"
            } border border-dark rounded-card shadow-card px-8 md:px-16 py-8 md:py-11 transition-colors duration-300 cursor-pointer`}
          >
            {/* Header row */}
            <div
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-4 md:gap-6 text-left">
                <span className="font-medium text-4xl md:text-6xl leading-none text-black select-none">
                  {step.number}
                </span>
                <span className="font-medium text-lg md:text-3xl leading-none text-black max-w-sm md:max-w-2xl">
                  {step.title}
                </span>
              </div>

              <div
                aria-hidden
                className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-dark bg-white flex items-center justify-center text-dark font-bold text-3xl md:text-4xl leading-none select-none transition-transform duration-300 ml-4"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </div>
            </div>

            {/* Animated expandable content using CSS grid trick */}
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="border-t border-dark mt-8 mb-0 pt-8">
                  <p className="text-base md:text-lg leading-relaxed text-black">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
