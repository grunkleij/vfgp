import HeroSction from "./components/HomeComponents/HeroSction";
import FeatureBar from "./components/HomeComponents/FeatureBar";
import { CheckCircle2, ArrowRight, ChevronRight, Star, Feather, Headset, Settings2, UserCog } from "lucide-react";

export default function Home() {
  return (
    <main>
      <HeroSction />
      <FeatureBar />

      {/* --- OUR LEGACY SECTION --- */}
      <section className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-[3px] border-l-[3px] border-[#C47D34]" />

              <img
                src="/lab.png"
                alt="Manufacturing Facility"
                className="w-full h-auto rounded-lg shadow-md object-cover relative z-10"
              />

              <div className="absolute -bottom-8 lg:-bottom-12 right-4 lg:-right-10 bg-[#1b2a52] text-white p-8 rounded-xl shadow-xl z-20 flex flex-col items-center justify-center min-w-[220px]">
                <span className="text-5xl font-black">#1</span>
                <span className="text-xs font-bold tracking-wider uppercase mt-2">
                  Composite Partner
                </span>
              </div>
            </div>

            <div className="flex flex-col pt-12 lg:pt-0">

              <span className="text-[#C47D34] font-bold text-sm tracking-widest uppercase">
                Our Legacy
              </span>

              <h2 className="text-4xl lg:text-[42px] font-black text-[#1b2a52] leading-[1.15] mt-4">
                Engineering Composite Solutions for the Future
              </h2>

              <p className="mt-6 text-gray-500 text-base leading-relaxed">
                We specialize in state-of-the-art FRP manufacturing, serving the
                most demanding industries with lightweight, high-strength
                composite materials. From custom tooling to mass production, our
                facility in India is equipped to handle complex engineering
                challenges.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C47D34] shrink-0" />
                  <span className="font-bold text-[#1b2a52]">Advanced Vacuum Infusion Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C47D34] shrink-0" />
                  <span className="font-bold text-[#1b2a52]">In-house R&D and Tooling Facility</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C47D34] shrink-0" />
                  <span className="font-bold text-[#1b2a52]">End-to-end Project Management</span>
                </li>
              </ul>

              <div className="mt-10">
                <button className="bg-[#283266] text-white px-8 py-3.5 rounded-md font-semibold flex items-center gap-2 hover:bg-[#1b2a52] transition-colors">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-[44px] font-black text-[#1b2a52] tracking-wide">
              Industries We Serve
            </h2>
            <div className="w-24 h-1.5 bg-[#F27A22] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="relative h-[420px] rounded-xl overflow-hidden group">
              <img src="/bus.png" alt="Automobile" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a52] via-[#1b2a52]/80 to-transparent h-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center pb-12">
                <h3 className="text-[28px] font-black text-[#F27A22] mb-3">Automobile</h3>
                <p className="text-white text-base font-medium leading-tight px-4">
                  Lightweight body panels for<br />high-performance vehicles.
                </p>
              </div>
            </div>

            <div className="relative h-[420px] rounded-xl overflow-hidden group">
              <img src="/robot.png" alt="Automobile Factory" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a52] via-[#1b2a52]/80 to-transparent h-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center pb-12">
                <h3 className="text-[28px] font-black text-[#F27A22] mb-3">Automobile</h3>
                <p className="text-white text-base font-medium leading-tight px-4">
                  Lightweight body panels for<br />high-performance vehicles.
                </p>
              </div>
            </div>

            <div className="relative h-[420px] rounded-xl overflow-hidden group">
              <img src="/bus2.png" alt="Defense Automobile" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a52] via-[#1b2a52]/80 to-transparent h-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center pb-12">
                <h3 className="text-[28px] font-black text-[#F27A22] mb-3">Automobile</h3>
                <p className="text-white text-base font-medium leading-tight px-4">
                  Lightweight body panels for<br />high-performance vehicles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS SECTION --- */}
      <section className="w-full bg-white py-20 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl lg:text-[42px] font-black text-[#1b2a52]">
                Featured Products
              </h2>
              <p className="text-gray-500 text-base mt-2">
                Precision molded FRP components for diverse applications
              </p>
            </div>

            <a href="/catalog" className="text-[#C47D34] font-bold flex items-center gap-1 hover:text-[#F27A22] transition-colors pb-1">
              View Catalog <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-[250px] overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                <img src="/bus3.png" alt="Bus Body Parts" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-black text-[#1b2a52] mb-2">Bus Body Parts</h3>
                <p className="text-[#C47D34] text-sm font-medium leading-relaxed pr-4">
                  Precision-engineered FRP bus body for commercial vehicles.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-[250px] overflow-hidden bg-white flex items-center justify-center p-6">
                <img src="/bodydouble.png" alt="Body Double" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-black text-[#1b2a52] mb-2">Body Double</h3>
                <p className="text-[#C47D34] text-sm font-medium leading-relaxed pr-4">
                  High-impact resistant front and rear bumper assemblies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-[250px] overflow-hidden bg-gray-50 flex items-center justify-center">
                <img src="/loadtestingbox.png" alt="Load Testing Box" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-black text-[#1b2a52] mb-2">Load Testing Box</h3>
                <p className="text-[#C47D34] text-sm font-medium leading-relaxed pr-4">
                  Lightweight insulating panels for modular enclosures.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[42px] font-black text-[#1b2a52]">
              Why Choose Us
            </h2>
            <div className="w-16 h-1.5 bg-[#F27A22] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center mb-6">
                <Settings2 className="w-8 h-8 text-[#1b2a52]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a52] mb-3">Advanced Infrastructure</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Automated production lines and vacuum resin infusion plants.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border border-[#F27A22]/20 bg-orange-50 flex items-center justify-center mb-6">
                <UserCog className="w-8 h-8 text-[#F27A22]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a52] mb-3">Custom Engineering</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Automated production lines and vacuum resin infusion plants.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center mb-6">
                <Feather className="w-8 h-8 text-[#1b2a52]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a52] mb-3">Lightweight Materials</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Automated production lines and vacuum resin infusion plants.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border border-[#F27A22]/20 bg-orange-50 flex items-center justify-center mb-6">
                <Headset className="w-8 h-8 text-[#F27A22]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a52] mb-3">Reliable Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Automated production lines and vacuum resin infusion plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR MANUFACTURING PROCESS SECTION --- */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          <h2 className="text-4xl md:text-[42px] font-black text-[#1b2a52] mb-3">
            Our Manufacturing Process
          </h2>
          <p className="text-gray-500 mb-20 text-sm md:text-base">
            How we turn concepts into high-performance composites
          </p>

          {/* Timeline Container */}
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-blue-100 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">

              {[
                { num: "01", title: "CONCEPT", desc: "Requirement analysis and design modeling.", color: "border-[#C47D34]" },
                { num: "02", title: "TOOLING", desc: "Precision mold fabrication using CNC tech.", color: "border-blue-200" },
                { num: "03", title: "FABRICATION", desc: "Lamination and resin infusion process.", color: "border-blue-200" },
                { num: "04", title: "TESTING", desc: "Rigorous QA and load-bearing tests.", color: "border-blue-200" },
                { num: "05", title: "DELIVERY", desc: "Final finishing and global logistics.", color: "border-blue-200" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-20 h-20 bg-white rounded-full border-2 ${step.color} flex items-center justify-center mb-6 shadow-sm`}>
                    <span className="text-2xl font-black text-[#1b2a52]">{step.num}</span>
                  </div>
                  <h4 className="text-[13px] font-black tracking-widest text-[#1b2a52] mb-2 uppercase">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm px-2">
                    {step.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* --- TRUSTED INDUSTRIES & TESTIMONIALS --- */}
      <section className="w-full bg-gray-50 pt-20 pb-48">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <h2 className="text-3xl md:text-[36px] font-black text-[#1b2a52] text-center mb-12">
            Trusted by Leading Industries
          </h2>


          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 mb-20">
            {['TATA MOTORS', 'DRDO', 'ASHOK LEYLAND', 'MAHINDRA', 'LARSEN & TOUBRO'].map((brand) => (
              <span key={brand} className="text-lg md:text-2xl font-black text-[#A0A4B0] uppercase tracking-wider">
                {brand}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#C47D34]" />
                ))}
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                "The precision and durability of the composite panels delivered by FRP Solutions have significantly improved our vehicle performance."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full" />
                <div>
                  <h4 className="font-bold text-[#1b2a52] text-sm">Rajesh Kumar</h4>
                  <p className="text-xs font-bold text-gray-400 tracking-wide mt-1 uppercase">SR. PROCUREMENT MANAGER, AUTOCORP</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#C47D34]" />
                ))}
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                "One of the most reliable FRP manufacturers in India. Their technical team is highly knowledgeable about defence specifications."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full" />
                <div>
                  <h4 className="font-bold text-[#1b2a52] text-sm">Col. Amit Singh</h4>
                  <p className="text-xs font-bold text-gray-400 tracking-wide mt-1 uppercase">STRATEGIC SOURCING, DEFENCE DIVISION</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- OVERLAPPING CTA CARD --- */}
      <section className="relative z-10 w-full max-w-[1000px] mx-auto px-6 -mt-32 mb-20">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-12 md:p-16 text-center border border-gray-100">

          <h2 className="text-3xl md:text-[42px] font-black text-[#1b2a52] mb-4 leading-tight">
            Looking for High Performance FRP Components?
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Get in touch with our engineering team for custom quotes and technical feasibility studies for your project.
          </p>

          <button className="bg-[#C47D34] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#a6682b] transition-colors shadow-lg shadow-[#C47D34]/30">
            Request a Quote
          </button>

        </div>
      </section>
    </main>
  );
}