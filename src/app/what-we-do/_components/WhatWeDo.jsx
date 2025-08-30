import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WhatWeDo = ({ data }) => {
    return (
        <Link className='bg-white hover:cursor-pointer' href={`/what-we-do/${data.title}`}>
            <div>
                <div className='p-10'>
                    <h1 className='text-[#6224A9] text-xl xl:text-3xl'>{data.title}</h1>
                </div>
                <div className='flex justify-end gap-4'>
                    <div className='flex items-center justify-center p-2 xl:p-5 w-fit bg-[#6224A9]'>
                        <ChevronRight color='white' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WhatWeDo