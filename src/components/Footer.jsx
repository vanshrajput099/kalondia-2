import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import facebook from "@/assets/facebook.png"

const Footer = () => {
    return (
        <div className='bg-[#F9FAFB] p-2 xl:p-0'>
            <div className='mx-auto xl:w-[80%]'>
                <div className='py-20 flex flex-col xl:flex-row justify-between xl:items-center gap-2 xl:gap-5 border-b-1 border-b-gray-400'>
                    <div className='space-y-2 xl:space-y-5'>
                        <Image className='w-[300px]' src={logo} alt='logo.png' />
                        <p>Empowering your financial future with trusted investments.</p>
                    </div>
                    <div className='mt-5 xl:mt-0'>
                        <ul className='space-y-3 xl:space-y-5'>
                            <li>Wishlist</li>
                            <li>Special Offers</li>
                            <li>Lookbook</li>
                            <li>Best Sellers</li>
                            <li>Mega</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-3 xl:space-y-5'>
                            <li>Wishlist</li>
                            <li>Special Offers</li>
                            <li>Lookbook</li>
                            <li>Best Sellers</li>
                            <li>Mega</li>
                        </ul>
                    </div>
                    <div className='flex gap-5 mt-5 xl:mt-0'>
                        <Image src={facebook} className='w-[50px] h-[50px]' alt='facebook.png' />
                        <Image src={facebook} className='w-[50px] h-[50px]' alt='facebook.png' />
                        <Image src={facebook} className='w-[50px] h-[50px]' alt='facebook.png' />
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row text-center xl:text-left justify-between text-xs xl:text-xl font-medium py-5'>
                    <h1>Copyright @ 2025 Millennium Investments LLC, All rights reserved.</h1>
                    <div className='flex justify-center gap-10 mt-5 xl:mt-0'>
                        <h1>Terms & Conditions</h1>
                        <h1>Privacy Policy</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer