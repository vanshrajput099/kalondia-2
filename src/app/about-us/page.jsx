import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';

const page = () => {
    return (
        <div className='xl:space-y-20 xl:pb-20'>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">About Us</h1>
                </div>
            </div>
            <div className='p-2 xl:p-0 xl:w-[40%] text-center mx-auto py-20'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Founded In 1977</h1>
                <div className='text-sm xl:text-base space-y-5 mt-5'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, repellendus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas quaerat cumque optio praesentium, quod nulla ipsa tenetur dolor reprehenderit modi, eveniet similique? Ratione fugiat voluptas minima? Quasi placeat suscipit officiis ducimus eius soluta qui ipsa temporibus iste commodi rerum nemo, sit, voluptatem reiciendis quis. Asperiores dignissimos nam exercitationem facere!</p>
                </div>
            </div>
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="space-y-4 absolute inset-0 flex flex-col items-center justify-center text-center text-white w-[50%] mx-auto">
                    <h1 className="text-[#6224A9] text-2xl xl:text-4xl font-semibold">Culture</h1>
                    <p className='text-sm xl:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae deserunt pariatur iure doloribus consequuntur ipsam similique, blanditiis dignissimos vitae distinctio.</p>
                </div>
            </div>
            <div className='p-2 xl:p-0 xl:w-[40%] text-center mx-auto py-20'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Focus</h1>
                <div className='text-sm xl:text-base mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas quaerat cumque optio praesentium, quod nulla ipsa tenetur dolor reprehenderit modi, eveniet similique? Ratione fugiat voluptas minima? Quasi placeat suscipit officiis ducimus eius soluta qui ipsa temporibus iste commodi rerum nemo, sit, voluptatem reiciendis quis. Asperiores dignissimos nam exercitationem facere!</p>
                </div>
            </div>
        </div>
    )
}

export default page