"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const TESTIMONIALS = [
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."',
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: '"Their SEO strategies alone drove a 300% increase in organic traffic. The team is knowledgeable, proactive, and always delivers beyond expectations. We highly recommend Positivus to any company."',
    name: "Sarah Johnson",
    role: "CEO at TechStart Inc",
  },
  {
    text: '"The PPC campaigns managed by Positivus have been incredibly effective. We\'ve seen a dramatic improvement in our ROI, and their reporting keeps us informed every step of the way."',
    name: "Michael Davis",
    role: "Head of Growth at RetailPlus",
  },
  {
    text: '"What impressed us most was their data-driven approach. Within just a few months, we were able to reduce our customer acquisition cost while scaling our campaigns efficiently. The clarity and consistency they bring are unmatched."',
    name: "Emily Carter",
    role: "Performance Manager at BrightScale",
  },
  {
    text: '"Positivus didn’t just execute — they helped us rethink our entire digital strategy. From funnel optimization to content positioning, every decision was backed by insights. The impact on our revenue has been substantial."',
    name: "Daniel Thompson",
    role: "Founder at GrowthLab",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-5 md:px-container py-10">
      <div className="bg-dark rounded-card py-16 md:py-20 relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
          breakpoints={{
            // Reduzi de 2.2 para 1.6 para que o balão fique bem mais largo no desktop
            1024: { 
              slidesPerView: 1.6, 
              spaceBetween: 30 
            },
            1440: {
              slidesPerView: 1.8,
              spaceBetween: 50
            }
          }}
          className="testimonial-swiper !px-6 md:!px-0"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i} className="pb-12">
              {/* Removi o max-w-2xl para permitir que o balão cresça conforme o slidesPerView */}
              <div className="mx-auto w-full max-w-[850px] md:px-4">
                <div className="relative border border-green rounded-card p-8 md:p-12 flex items-center bg-dark min-h-[220px]">
                  <p className="text-base md:text-lg leading-relaxed text-white">
                    {t.text}
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-px left-12 translate-y-full">
                    <div className="w-8 h-8 border-l border-b border-green bg-dark -rotate-45 -translate-y-1/2" />
                  </div>
                </div>

                {/* Author */}
                <div className="mt-11 ml-16 flex flex-col">
                  <span className="font-medium text-lg md:text-xl text-green">
                    {t.name}
                  </span>
                  <span className="text-base md:text-lg text-white">
                    {t.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-lg mx-auto mt-3 md:mt-10 px-10 relative z-10">
          <button className="btn-prev text-white disabled:opacity-30 hover:text-green transition-colors duration-200 cursor-pointer p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-4">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className="transition-all duration-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  // Corrigido para garantir que o preenchimento funcione em todos os estados
                  fill={activeIndex === i ? "#B9FF66" : "white"}
                >
                  <path d="M7 0L8.8906 5.1094L14 7L8.8906 8.8906L7 14L5.1094 8.8906L0 7L5.1094 5.1094L7 0Z" />
                </svg>
              </div>
            ))}
          </div>

          <button className="btn-next text-white disabled:opacity-30 hover:text-green transition-colors duration-200 cursor-pointer p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}