import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES_DATA_OBJ } from '@/data';

const page = async ({ params }) => {

    const paramsNames = await params;
    const title = paramsNames.service.split("%20").join(" ");
    console.log(title)

    return (
        <div>
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-center text-4xl font-semibold">{title}</h1>
                </div>
            </div>

            <div className='p-2 xl:p-0 xl:w-[60%] mx-auto py-5 pb-10 xl:py-20'>
                <div className='space-y-3 mt-10'>
                    {
                        SERVICES_DATA_OBJ[title].map((ele, key) => <p className='text-sm xl:text-base' key={key}>{ele}</p>)
                    }
                </div>

                <div className='mt-20'>
                    <Link href={"/what-we-do"} className='bg-[#6224A9] text-white px-6 py-4 rounded-lg text-xs xl:text-sm'>
                        Return To Who We Do
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page