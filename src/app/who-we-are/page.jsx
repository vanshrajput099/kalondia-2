import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import MainPersonAbout from './_components/MainPersonAbout';
import OthersAbout from './_components/OthersAbout';

const page = () => {
    return (
        <div>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Who We Are</h1>
                </div>
            </div>
            <div className='py-20 bg-[#F9FAFB]'>
                <div className='w-[40%] mx-auto text-center'>
                    <h1 className='text-4xl text-[#6224A9] font-medium'>Management Committee</h1>
                    <div className='text-base space-y-5 mt-5'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, repellendus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas quaerat cumque optio praesentium, quod nulla ipsa tenetur dolor reprehenderit modi, eveniet similique? Ratione fugiat voluptas minima? Quasi placeat suscipit officiis ducimus eius soluta qui ipsa temporibus iste commodi rerum nemo, sit, voluptatem reiciendis quis. Asperiores dignissimos nam exercitationem facere!</p>
                    </div>
                </div>

                <div className='w-[70%] mx-auto grid grid-cols-2 mt-10 gap-x-10'>
                    <MainPersonAbout />
                    <MainPersonAbout />
                </div>

                <div className='w-[70%] mx-auto grid grid-cols-3 gap-x-10 gap-y-10 mt-10'>
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