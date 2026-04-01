import React from 'react';
import { Share2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A2E5B] pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 w-[52px] h-[52px] flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="VF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[#D98C21] font-black text-xl leading-tight tracking-wide">
                VENKATESHWARA<br />
                FIBREGLASS PRODUCTS
              </h2>
            </div>
            
            <p className="text-white text-base md:text-[17px] leading-relaxed mb-8 max-w-[420px]">
              Providing the global industrial sector with superior fiber reinforced plastic solutions for 30 years.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-[#3D426D] flex items-center justify-center text-[#D98C21] hover:bg-[#4A4F7D] transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-[#3D426D] flex items-center justify-center text-[#D98C21] hover:bg-[#4A4F7D] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[#D98C21] font-bold text-[15px] tracking-widest uppercase mb-6">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-white hover:text-[#D98C21] transition-colors text-[15px]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#D98C21] transition-colors text-[15px]">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#D98C21] transition-colors text-[15px]">
                  Technical Data
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#D98C21] transition-colors text-[15px]">
                  Request Quote
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[#D98C21] font-bold text-[15px] tracking-widest uppercase mb-6">
              CONTACT
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-white text-[15px] leading-relaxed">
                  1200 Composite Blvd, Industrial<br />
                  Park, Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span className="text-white text-[15px]">
                  +1 (800) 555-0199
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-center">
          <p className="text-white/80 text-[14px]">
            © 2024 FRP Manufacturing Co. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}