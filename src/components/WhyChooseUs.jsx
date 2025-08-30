import Image from 'next/image'
import React from 'react'

const WhyChooseUs = ({ data }) => {
    return (
        <div className='flex gap-2 xl:w-[90%] border border-gray-200 rounded-xl p-5'>
            <Image className='w-fit h-fit' src={data.icon} alt='whyChooseUs.png' />
            <div className='space-y-3'>
                <h1 className='text-xl xl:text-2xl font-medium'>{data.title}</h1>
                <p className='text-sm xl:text-base'>{data.description}</p>
            </div>
        </div>
    )
}

export default WhyChooseUs