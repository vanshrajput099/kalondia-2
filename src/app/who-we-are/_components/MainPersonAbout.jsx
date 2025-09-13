import { MainMember } from '@/data';
import { MoveRightIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const MainPersonAbout = () => {
    return (
        <Link className='bg-white hover:cursor-pointer' href={`/who-we-are/${MainMember.name}`}>
            <div>
                <div className='p-5 xl:p-10'>
                    <h1 className='text-[#6224A9] text-xl xl:text-3xl'>{MainMember.desc}</h1>
                    <div className='text-xs xl:text-base mt-3'>
                        <p>{MainMember.desc}</p>
                    </div>
                </div>
                <div className='flex justify-end gap-4'>
                    <div className='text-xs xl:text-sm flex flex-col items-end justify-center'>
                        <i>Joined In {MainMember.joinTime}</i>
                        <i>Partner Since {MainMember.partnerSince}</i>
                    </div>
                    <div className='flex items-center justify-center p-2 xl:p-5 w-fit bg-[#6224A9]'>
                        <ChevronRight color='white' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MainPersonAbout