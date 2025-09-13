import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import WhatWeDo from './_components/WhatWeDo';
import { SERVICES_DATA } from '@/data';

const page = () => {
    return (
        <div className='xl:space-y-20'>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">What We Do</h1>
                </div>
            </div>
            <div className='p-2 xl:p-0 xl:w-[40%] text-center mx-auto py-20'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Empowering Growth Through <br />
                    Innovative Investment Solutions</h1>
                <div className='text-sm xl:text-base space-y-5 mt-5'>
                    <p>At Millennium Investment LLC, we provide a comprehensive suite of services designed to maximize value and drive growth. From advanced investment management and private equity solutions to high-frequency AI-driven trading, we empower clients with innovative strategies and precise market insights. Our expertise also extends to strategic funding and exclusive pre-IPO opportunities, ensuring access to high-potential ventures at the right time. With a focus on innovation, accuracy, and long-term success, we help clients navigate global markets with confidence and achieve sustainable financial growth.</p>
                </div>
            </div>
            <div className='bg-[#F9FAFB] py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-[90%] xl:w-[70%] gap-x-10 gap-y-10'>
                    {
                        SERVICES_DATA.map((ele, key) => <WhatWeDo data={ele} key={key} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default page