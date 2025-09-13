import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { MainMember_OBJ, TEAM_MEMBERS_OBJ } from '@/data';

const page = async ({ params }) => {

    const paramsNames = await params;
    const name = paramsNames.name.split("%20").join(" ");

    return (
        <div>
            <Image src={bg} className='h-[300px] object-cover' alt='image.png' />
            <div className='p-2 xl:p-0 xl:w-[60%] mx-auto py-10 xl:py-30'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>{name}</h1>
                <div className='text-sm xl:text-base space-y-3 mt-10'>
                    {
                        name === "Dr. Niranjan Patel" ? 
                        MainMember_OBJ[name].map((ele, key) => <p className='text-sm xl:text-base' key={key}>{ele}</p>)
                        :
                        TEAM_MEMBERS_OBJ[name].map((ele, key) => <p className='text-sm xl:text-base' key={key}>{ele}</p>)
                    }
                </div>

                <div className='mt-20'>
                    <Link href={"/who-we-are"} className='bg-[#6224A9] text-white px-6 py-4 rounded-lg text-xs xl:text-sm'>
                        Return To Who We Are
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page