import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import WhatWeDo from './_components/WhatWeDo';
import { SERVICES_DATA } from '@/data';

const page = () => {
    return (
        <div>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">What We Do</h1>
                </div>
            </div>
            <div className='w-[40%] text-center mx-auto py-20'>
                <h1 className='text-4xl text-[#6224A9] font-medium'>Founded In 1977</h1>
                <div className='text-base space-y-5 mt-5'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, repellendus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas quaerat cumque optio praesentium, quod nulla ipsa tenetur dolor reprehenderit modi, eveniet similique? Ratione fugiat voluptas minima? Quasi placeat suscipit officiis ducimus eius soluta qui ipsa temporibus iste commodi rerum nemo, sit, voluptatem reiciendis quis. Asperiores dignissimos nam exercitationem facere!</p>
                </div>
            </div>
            <div className='bg-[#F9FAFB] py-20'>
                <div className='grid grid-cols-2 mx-auto w-[70%] gap-x-10 gap-y-10'>
                    {
                        SERVICES_DATA.map((ele, key) => <WhatWeDo data={ele} key={key} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default page