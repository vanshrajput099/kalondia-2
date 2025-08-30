import Image from 'next/image'
import React from 'react'

const Service = ({ data }) => {
    return (
        <div className='flex flex-col xl:flex-row gap-4 xl:w-[90%] border border-gray-200 rounded-xl p-5 shadow-xl'>
            <Image className='w-full h-[150px] xl:h-fit xl:w-[130px] object-cover' src={data.image} alt='servce.png' />
            <div className='flex flex-col justify-between text-center xl:text-left space-y-2 xl:space-y-0'>
                <h1 className='font-medium text-xl xl:text-2xl'>{data.title}</h1>
                <p className='text-sm xl:text-base'>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default Service