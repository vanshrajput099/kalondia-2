import { MoveRightIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const MainPersonAbout = ({ name = "name" }) => {
    return (
        <Link className='bg-white hover:cursor-pointer' href={`/who-we-are/${name}`}>
            <div>
                <div className='p-5 xl:p-10'>
                    <h1 className='text-[#6224A9] text-xl xl:text-3xl'>Name</h1>
                    <div className='text-xs xl:text-base mt-3'>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex justify-end gap-4'>
                    <div className='text-xs xl:text-sm flex flex-col items-end justify-center'>
                        <i>Joined In 2000</i>
                        <i>Partner Since 2000</i>
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