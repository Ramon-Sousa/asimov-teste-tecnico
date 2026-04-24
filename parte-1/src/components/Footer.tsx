"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const NAV_LINKS = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="px-5 md:px-container">
      <div className="bg-dark rounded-tl-card rounded-tr-card px-6 md:px-16 pt-10 md:pt-14 pb-8 md:pb-12 flex flex-col gap-8 md:gap-12">

        {/* Top row: logo / nav / social */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="https://www.figma.com/api/mcp/asset/f6e58f34-938b-4032-af63-2999f9538d86"
              alt="Positivus icon"
              width={30}
              height={30}
              style={{ width: 30, height: 30 }}
              unoptimized
            />
          </div>

          {/* Nav — wraps on small screens */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm md:text-base leading-none text-white underline underline-offset-2 hover:text-green transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="shrink-0">
            <Image
              src="https://www.figma.com/api/mcp/asset/f9655b17-d6e0-4a45-953d-34be08dcdf60"
              alt="Social media links"
              width={130}
              height={30}
              style={{ width: 130, height: 30, objectFit: "contain" }}
              unoptimized
            />
          </div>
        </div>

        {/* Middle row: contact info + newsletter */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16 lg:gap-40">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <span className="inline-block bg-green rounded-tag px-1.5 font-medium text-lg leading-none text-black self-start">
              Contact us:
            </span>
            <div className="flex flex-col gap-3 text-base md:text-lg text-white">
              <span>Email: info@positivus.com</span>
              <span>Phone: 555-567-8901</span>
              <span>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-dark-secondary rounded-btn px-6 py-8 md:px-10 md:py-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-white rounded-btn px-6 py-4 md:px-9 md:py-5 bg-transparent text-base md:text-lg text-white placeholder:text-white outline-none focus:border-green transition-colors duration-200 w-full sm:w-64 md:w-72"
            />
            <Button
              type="button"
              variant="green"
              onClick={() => {}}
              className="w-full sm:w-auto whitespace-nowrap"
            >
              Subscribe to news
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
          <span className="text-sm md:text-base leading-6 text-white">
            © 2023 Positivus. All Rights Reserved.
          </span>
          <a
            href="#"
            className="text-sm md:text-base leading-6 text-white underline underline-offset-2 hover:text-green transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
}
