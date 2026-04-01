import Image from 'next/image'
import React from 'react'
import icon from "../../public/logo.png"
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className=' flex justify-between px-[12px] py-[16px] '>
            <div className='flex gap-[8px]'>
                <Image src={icon} alt="logo" className='w-[42px] h-[41px]'/>
                <h1 className='text-[19px] leading-[21px] font-extrabold uppercase color-[#282967] text-[#282967]'>Venkateshwara
                    <br></br>fibreglass Products</h1>
            </div>


            <ul className='flex gap-[32px] items-center text-[#282967] font-[600]'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Products</Link></li>
                <li><Link href="/">Facilities</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>

            <div className='bg-[#282967] rounded-[8px] text-white items-center flex px-[20px] py-[8px]'>
                <button className=''>Get a Quote</button>
            </div>

        </nav>
    )
}
