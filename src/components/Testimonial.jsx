import React from 'react'
import { Quote } from 'lucide-react';
import { Star } from 'lucide-react';
import test1 from "@/assets/test1.png"
import Image from 'next/image';

const Testimonial = () => {
    return (
        <div className='border border-gray-200 bg-[#F9FAFB] px-2 py-5 xl:px-5 xl:py-10 rounded-xl space-y-10'>
            <div className='flex justify-between'>
                <Quote color="#6224A9" />
                <div className='flex'>
                    <Star color="#e0d452" />
                    <Star color="#e0d452" />
                    <Star color="#e0d452" />
                    <Star color="#e0d452" />
                    <Star color="#e0d452" />
                </div>
            </div>
            <p className='xl:text-xl'>
                Partnering with this firm has transformed our trading journey. Their AI-driven strategies and high-frequency execution helped us achieve consistent profits while minimizing risks. Truly a game-changer in the financial space.
            </p>
            <div className='flex items-center gap-5'>
                <Image className='w-[15%] xl:w-[20%]' src={test1} alt='test1.png' />
                <div className='space-y-1 xl:space-y-2'>
                    <h1 className='text-sm xl:text-base'>Arjun Mehta</h1>
                    <p className='text-gray-400 text-xs xl:text-sm'>Institutional Investor</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial