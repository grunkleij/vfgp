"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import icon from "../../../public/logo.png"
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Added proper icons

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const industriesHref = "/industries/automobile"

    // Helper function to close the menu when a link is clicked on mobile
    const closeMenu = () => setOpen(false)

    return (
        // Added sticky positioning and a high z-index (z-50) so it always stays above the hero section
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
            <nav className='max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-12 py-4 relative'>

                {/* Logo Section */}
                <div className='flex gap-3 items-center'>
                    <Image src={icon} alt="logo" className='w-9 h-9 sm:w-11 sm:h-11 object-contain' />
                    <h1 className='text-[13px] sm:text-[15px] md:text-[16px] leading-tight font-black uppercase text-[#1b2a52]'>
                        Venkateshwara <br /> Fibreglass Products
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex gap-8 xl:gap-10 items-center text-[#1b2a52] font-bold text-[15px]'>
                    <li><Link href="/" className="hover:text-[#F27A22] transition-colors">Home</Link></li>
                    <li><Link href="/about_us" className="hover:text-[#F27A22] transition-colors">About Us</Link></li>
                    <li><Link href="/product" className="hover:text-[#F27A22] transition-colors">Products</Link></li>
                    <li><Link href={industriesHref} className="hover:text-[#F27A22] transition-colors">Industries</Link></li>
                </ul>

                {/* Desktop CTA */}
                <div className='hidden lg:flex'>
                    <Link href="/contact" className="bg-[#1b2a52] hover:bg-[#283266] text-white px-7 py-3 rounded-md font-bold text-sm transition-colors shadow-md">
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className='lg:hidden flex items-center'>
                    <button 
                        onClick={() => setOpen(!open)} 
                        className='text-[#1b2a52] p-2 -mr-2 focus:outline-none hover:text-[#F27A22] transition-colors'
                        aria-label="Toggle Menu"
                    >
                        {/* Swaps between Hamburger menu and Close 'X' icon */}
                        {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className='absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 lg:hidden z-50'>
                    <ul className='flex flex-col items-center gap-6 py-8 text-[#1b2a52] font-bold text-base'>
                        <li><Link href="/" onClick={closeMenu} className="hover:text-[#F27A22] transition-colors">Home</Link></li>
                        <li><Link href="/about_us" onClick={closeMenu} className="hover:text-[#F27A22] transition-colors">About Us</Link></li>
                        <li><Link href="/product" onClick={closeMenu} className="hover:text-[#F27A22] transition-colors">Products</Link></li>
                        <li><Link href={industriesHref} onClick={closeMenu} className="hover:text-[#F27A22] transition-colors">Industries</Link></li>
                        <li><Link href="/contact" onClick={closeMenu} className="hover:text-[#F27A22] transition-colors">Contact</Link></li>
                        <li className="mt-4 w-full px-6">
                            <Link href="/contact" onClick={closeMenu} className='flex justify-center bg-[#F27A22] text-white px-4 py-3.5 rounded-md shadow-md hover:bg-[#c96414] transition-colors w-full'>
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}