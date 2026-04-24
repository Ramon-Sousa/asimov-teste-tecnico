"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ContactUs() {
  const [intent, setIntent] = useState<"hi" | "quote">("hi");

  return (
    <section id="contact" className="px-5 md:px-container py-10">
      <div className="bg-grey rounded-card px-8 md:px-16 lg:px-container py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden min-h-[600px]">
        {/* Form */}
        <form className="flex flex-col gap-8 md:gap-10 items-start w-full lg:max-w-[50%] z-10">
          {/* Radio group */}
          <div className="flex items-center gap-9">
            {(["hi", "quote"] as const).map((value) => (
              <label key={value} className="flex items-center gap-3.5 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="intent"
                    className="peer appearance-none w-7 h-7 border border-black rounded-full bg-white checked:bg-white cursor-pointer"
                    checked={intent === value}
                    onChange={() => setIntent(value)}
                  />
                  <div className="absolute w-3 h-3 rounded-full bg-green opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                </div>
                <span className="text-lg text-black">
                  {value === "hi" ? "Say Hi" : "Get a Quote"}
                </span>
              </label>
            ))}
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5 md:gap-6 w-full">
            {[
              { label: "Name", type: "text", required: false },
              { label: "Email", type: "email", required: true },
            ].map(({ label, type, required }) => (
              <div key={label} className="flex flex-col gap-2">
                <label className="text-base text-black">
                  {label}
                  {required && "*"}
                </label>
                <input
                  type={type}
                  required={required}
                  placeholder={label}
                  className="w-full bg-white border border-black rounded-btn px-8 py-5 text-lg text-black placeholder:text-muted outline-none focus:ring-2 focus:ring-green transition-all duration-200"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label className="text-base text-black">Message*</label>
              <textarea
                required
                placeholder="Message"
                rows={5}
                className="w-full bg-white border border-black rounded-btn px-8 py-5 text-lg text-black placeholder:text-muted resize-none outline-none focus:ring-2 focus:ring-green transition-all duration-200"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Send Message
          </Button>
        </form>

        {/* Illustration */}
        <div className="hidden lg:block absolute right-[-50px] xl:right-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%] pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/illustration-form.png"
              alt="Contact illustration"
              fill
              className="object-contain object-right"
              sizes="40vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
