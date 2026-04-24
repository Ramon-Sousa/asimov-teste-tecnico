"use client";

import { useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";

const NAV_LINKS = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 md:px-container py-8 md:py-8 relative">
      {/* Logo */}
      <div className="shrink-0">
        <Image
          src="/logo.png"
          alt="Positivus"
          width={190}
          height={56}
          style={{ width: 190, height: "auto" }}
          priority
          unoptimized
        />
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-xl leading-7 text-black hover:underline underline-offset-4 transition-all duration-200"
          >
            {link}
          </a>
        ))}
        <LinkButton variant="outline" href="#contact">
          Request a quote
        </LinkButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark z-50 flex flex-col items-center gap-6 py-8 px-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-xl font-medium hover:text-green transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <LinkButton
            variant="outline"
            href="#contact"
            className="border-white text-white hover:bg-white hover:text-dark w-full text-center"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </LinkButton>
        </div>
      )}
    </nav>
  );
}
