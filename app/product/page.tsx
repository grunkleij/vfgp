"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Page() {
  const router = useRouter();
  const parts = [
    { id: 1, name: "Front Bumper Assembly", img: "/parts/1-1.png" },
    { id: 2, name: "Rear Panel", img: "/parts/2-1.png" },
    { id: 3, name: "Side Skirt", img: "/parts/3-1.png" },
    { id: 4, name: "Roof Hatch", img: "/parts/4-1.png" },
    { id: 5, name: "Dashboard Assembly", img: "/parts/5-1.png" },
    { id: 6, name: "Interior Trim", img: "/parts/6.png" },
    { id: 7, name: "Side Panel Assembly", img: "/parts/7.png" },
    { id: 8, name: "FRP Cover Component", img: "/parts/8.png" },
    { id: 9, name: "Molded Panel", img: "/parts/9.png" },
    { id: 10, name: "Access Door", img: "/parts/10.png" },
    { id: 11, name: "FRP Enclosure", img: "/parts/11.png" },
    { id: 12, name: "Cluster Bezel", img: "/parts/Cluster-Bezel.png" },
    { id: 13, name: "Engine Hood", img: "/parts/Engine-Hood-A.png" },
    { id: 14, name: "Podest with Stiffener", img: "/parts/Podest-with-stifner.png" },
    { id: 15, name: "Snorkel Mesh Cover", img: "/parts/Snorkel-Mesh-Cover.png" },
    { id: 16, name: "VehicleDashboard and podest assembly with front inner dome.png", img: "/parts/VehicleDashboard-and-podest-assembly-with-front-inner-dome.png" },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] md:min-h-[550px] flex items-center">

        {/* Background Image Layer (z-0) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/parts/hero/producthero.png"
            alt="Bus Body Parts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay Layer (z-10) */}
        <div className="absolute inset-0 bg-[#0c1221]/80 z-10" />

        {/* Hero Content Layer (z-20) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20"
        >
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-4 md:mb-6">
            <span className="text-[#e0e7ff]">Bus Body</span> <br />
            <span className="text-[#F27A22]">Parts</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-300 font-medium max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            High-quality FRP components designed for durability, lightweight
            performance, and modern bus manufacturing.
          </motion.p>
          <motion.button
            onClick={() => router.push('/contact')}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F27A22] text-white px-6 sm:px-8 py-3 md:py-3.5 rounded-md font-bold text-sm sm:text-base md:text-lg hover:bg-[#d96b1c] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 w-full sm:w-auto"
          >
            Request a Quote
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </section>

      {/* ─── OUR PRODUCTS / PARTS GRID ────────────────────────────────── */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1b2a52] mb-4">
              All <span className="italic text-[#F27A22]">Components</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#F27A22] mx-auto rounded-full mb-6" />
            <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              You will find yourself working in a true partnership that results in an incredible
              experience, and an end product that is the best.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 border-b border-gray-200 mb-12 md:mb-16"
          >
            <button className="pb-3 md:pb-4 border-b-2 border-[#F27A22] text-[#F27A22] font-bold flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              All Cases
            </button>
            <button className="pb-3 md:pb-4 border-b-2 border-transparent text-gray-400 font-bold hover:text-[#1b2a52] transition-colors flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Automobile
            </button>
          </motion.div>

          {/* Parts Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-16"
          >
            {parts.map((part) => (
              <motion.div
                key={part.id}
                variants={fadeUp}
                className="group cursor-pointer flex flex-col items-center"
              >
                {/* Clean Image Container - Fixed aspect ratio class */}
                <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden mb-4 md:mb-6">
                  <img
                    src={part.img}
                    alt={part.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out px-4"
                  />
                </div>

                {/* Part Details */}
                <div className="text-center">
                  <h3 className="text-[#1b2a52] font-black text-xs md:text-sm lg:text-[15px] tracking-[0.1em] md:tracking-[0.18em] uppercase mb-2 group-hover:text-[#F27A22] transition-colors px-2">
                    {part.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-gray-200 mx-auto group-hover:bg-[#F27A22] transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── FEATURED PRODUCT: BODY DOUBLE ────────────────────────────── */}
      <section className="w-full bg-[#1b2a52] py-16 md:py-24 overflow-hidden border-t-4 border-[#F27A22]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <p className="text-[#F27A22] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
              FRP Human Being Body Part
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
              Automotive Testing <br />
              <span className="italic text-gray-200">Body Double</span>
            </h2>
            <div className="w-16 h-1 bg-[#F27A22] mb-6 md:mb-8 rounded-full" />

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Precision-engineered FRP body double designed specifically for rigorous automotive load, impact, and safety testing. Built to exact specifications to simulate human weight distribution and spatial displacement.
            </p>

            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {[
                "High-impact resistant FRP composite construction",
                "Accurate dimensional scaling (610mm standard)",
                "Integrated mounting structures for secure testing",
                "OEM approved for vehicle safety validations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#F27A22] shrink-0 mt-0.5" />
                  <span className="font-medium text-sm md:text-base text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F27A22] text-white px-6 sm:px-8 py-3 md:py-3.5 rounded font-bold text-sm md:text-base hover:bg-[#c96414] transition-colors shadow-lg w-full sm:w-auto"
            >
              Request Specifications
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            className="relative mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0"
          >
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-32 md:h-32 border-t-[4px] border-r-[4px] border-[#F27A22] z-0" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-32 md:h-32 border-b-[4px] border-l-[4px] border-gray-600 z-0" />

            <div className="relative z-10 bg-white rounded-xl p-1.5 md:p-2 shadow-2xl">
              <img
                src="/parts/body_double.jpeg"
                alt="Automotive Testing Body Double"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── FEATURED PRODUCT: LOAD TESTING BOX ───────────────────────── */}
      <section className="w-full bg-slate-50 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-[#F27A22] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
              Our Automobile Products
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b2a52] mb-4 md:mb-6">
              FRP Load <span className="italic text-[#F27A22]">Testing Box</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#F27A22] mx-auto rounded-full mb-4 md:mb-6" />
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              High-strength FRP load testing boxes available in various capacities for rigorous industrial and automotive load simulations. Built for extreme durability under heavy stress.
            </p>
          </motion.div>

          {/* Images Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-16"
          >
            
            {/* Box 1: 500 Kg */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-xl mb-6 md:mb-8 bg-gray-50 flex items-center justify-center">
                <img 
                  src="/parts/load_testing_1.png" 
                  alt="FRP Load Testing Box 500 Kg" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-black text-[#1b2a52] mb-2 md:mb-3">
                  500 Kg <span className="text-gray-400 font-medium text-base md:text-lg">Capacity</span>
                </h3>
                <div className="w-10 md:w-12 h-1 bg-[#F27A22] mx-auto rounded-full" />
              </div>
            </motion.div>

            {/* Box 2: 2000 Kg */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-xl mb-6 md:mb-8 bg-gray-50 flex items-center justify-center">
                <img 
                  src="/parts/load_testing_2.png" 
                  alt="FRP Load Testing Box 2000 Kg" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-black text-[#1b2a52] mb-2 md:mb-3">
                  2000 Kg <span className="text-gray-400 font-medium text-base md:text-lg">Capacity</span>
                </h3>
                <div className="w-10 md:w-12 h-1 bg-[#F27A22] mx-auto rounded-full" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}