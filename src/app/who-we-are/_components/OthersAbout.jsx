import React from 'react'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'

const OthersAbout = ({ data }) => {
    console.log(data)
    return (
        <Link className='bg-white hover:cursor-pointer' href={`/who-we-are/${data.name}`}>
            <div className='bg-white'>
                <div className='p-5 xl:p-10'>
                    <h1 className='text-[#6224A9] text-xl xl:text-3xl'>{data.name}</h1>
                    <p className='text-xs xl:text-base mt-3'>{data.desc}</p>
                </div>
                <div className='flex justify-end gap-4'>
                    <div className='text-xs xl:text-sm flex flex-col items-end justify-center'>
                        <i>Joined In {data.joinTime}</i>
                        <i>Partner Since {data.partnerSince}</i>
                    </div>
                    <div className='flex items-center justify-center p-2 xl:p-5 w-fit bg-[#6224A9]'>
                        <MoveRightIcon color='white' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OthersAbout