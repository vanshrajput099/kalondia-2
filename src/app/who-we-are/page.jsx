import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import MainPersonAbout from './_components/MainPersonAbout';
import OthersAbout from './_components/OthersAbout';

const page = () => {
    return (
        <div className=''>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Who We Are</h1>
                </div>
            </div>
            <div className='px-2 xl:px-0 py-20 bg-[#F9FAFB]'>
                <div className='xl:w-[40%] mx-auto text-center'>
                    <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Management Committee</h1>
                    <div className='text-sm xl:text-base space-y-5 mt-5'>
                        <p>At Millennium Investment LLC, our strength lies in our people. Backed by decades of combined experience, our team of seasoned investment professionals, analysts, and strategists brings unparalleled expertise to every decision. Each member contributes unique insights from global markets, risk management, and financial innovation, ensuring we deliver consistently strong results for our clients. United by a shared vision of excellence, integrity, and innovation, our people are the driving force behind Millennium’s continued success.</p>
                    </div>
                </div>

                <div className='xl:w-[70%] mx-auto grid lg:grid-cols-2 mt-10 gap-x-10'>
                    <MainPersonAbout />
                    <MainPersonAbout />
                </div>

                <div className='xl:w-[70%] mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 mt-10'>
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                    <OthersAbout />
                </div>
            </div>
        </div>
    )
}

export default page