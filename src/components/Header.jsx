import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png";
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <>
            <div className='lg:hidden flex justify-between items-center px-2'>
                <Menu color='#6224A9' />
                <Link href={"/"}>
                    <Image src={logo} alt='logo.png' className='w-[150px]' />
                </Link>
            </div>
            <div className='hidden lg:flex mx-auto w-[95%] xl:w-[80%]  items-center justify-between py-5'>
                <Link href={"/"}>
                    <Image src={logo} alt='logo.png' className='w-[250px]' />
                </Link>
                <div className='flex gap-8 items-center '>
                    <Link href={"/about-us"}>About Us</Link>
                    <Link href={"/who-we-are"}>Who We Are</Link>
                    <Link href={"/what-we-do"}>What We Do</Link>
                    <Link href={"/"}>For Investors</Link>
                    <Link className='bg-[#6224A9] text-white px-4 py-2 rounded-lg' href={"/contact"}>Contact</Link>

                </div>
            </div>
        </>
    )
}

export default Header