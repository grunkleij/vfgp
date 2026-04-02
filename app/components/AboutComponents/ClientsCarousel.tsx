"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  { src: "/clients/ashokleyland.png", alt: "Ashok Leyland" },
  { src: "/clients/mungi.png",        alt: "Mungi" },
  { src: "/clients/navistar.png",     alt: "Mahindra Navistar" },
  { src: "/clients/rise.png",         alt: "Mahindra Rise" },
  { src: "/clients/ashokleyland.png", alt: "Ashok Leyland" },
  { src: "/clients/mungi.png",        alt: "Mungi" },
  { src: "/clients/navistar.png",     alt: "Mahindra Navistar" },
  { src: "/clients/rise.png",         alt: "Mahindra Rise" },
];

export default function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const visible = 4;

  const scroll = (dir : string) => {
    const next = dir === "next"
      ? Math.min(active + 1, clients.length - visible)
      : Math.max(active - 1, 0);
    setActive(next);
    trackRef.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#1b2a52] mb-2">
            Our <span className="italic text-[#F27A22]">Clients</span>
          </h2>
          <div className="w-16 h-1 bg-[#F27A22] mx-auto rounded-full" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={() => scroll("prev")}
            disabled={active === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10
                       w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
                       flex items-center justify-center
                       hover:bg-[#F27A22] hover:border-[#F27A22] hover:text-white
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {clients.map(({ src, alt }, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[calc(25%-18px)] min-w-50
                           h-37.5 bg-white rounded-2xl border border-gray-100 shadow-sm
                           flex items-center justify-center p-6
                           hover:shadow-lg hover:border-[#F27A22]/50 hover:-translate-y-1
                           transition-all duration-300"
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("next")}
            disabled={active >= clients.length - visible}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10
                       w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
                       flex items-center justify-center
                       hover:bg-[#F27A22] hover:border-[#F27A22] hover:text-white
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: clients.length - visible + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                trackRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#F27A22]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
