import React from 'react';
import { Share2, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1221] pt-20 pb-8 border-t-[4px] border-[#F27A22]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-1.5 w-14 h-14 flex items-center justify-center rounded-sm">
                <img 
                  src="/logo.png" 
                  alt="VF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[#F27A22] font-black text-xl md:text-2xl leading-tight tracking-wide">
                VENKATESHWARA<br />
                <span className="text-white text-lg md:text-xl">FIBREGLASS PRODUCTS</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Leading manufacturers of advanced FRP composites for Automobiles, Defence, and Engineering Industrial applications. Providing unmatched durability and performance.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-[#1b2a52] flex items-center justify-center text-[#F27A22] hover:bg-[#F27A22] hover:text-white transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-[#1b2a52] flex items-center justify-center text-[#F27A22] hover:bg-[#F27A22] hover:text-white transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 lg:col-span-3 lg:pl-8">
            <h3 className="text-[#F27A22] font-bold text-[15px] tracking-widest uppercase mb-6">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about_us" },
                { name: "Products", href: "/product" },
                { name: "Industries", href: "/industries/automobile" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#F27A22] transition-colors text-[15px] flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-[#F27A22]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-[#F27A22] font-bold text-[15px] tracking-widest uppercase mb-6">
              CONTACT US
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="bg-[#1b2a52] p-2.5 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#F27A22]" />
                </div>
                <span className="text-gray-300 text-[15px] leading-relaxed">
                  Plot No 6, R.I.E, Zaheerabad,<br />
                  Industrial Hub, Telangana, India
                </span>
              </li>
              
              <li className="flex items-center gap-4">
                <div className="bg-[#1b2a52] p-2.5 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-[#F27A22]" />
                </div>
                <span className="text-gray-300 text-[15px]">
                  +91 98765 43210
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="bg-[#1b2a52] p-2.5 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-[#F27A22]" />
                </div>
                <span className="text-gray-300 text-[15px]">
                  info@vfgp.in
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-[14px]">
            &copy; {new Date().getFullYear()} Venkateshwara Fibreglass Products. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}