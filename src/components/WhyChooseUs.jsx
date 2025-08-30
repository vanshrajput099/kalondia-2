import Image from 'next/image'
import React from 'react'

const WhyChooseUs = ({ data }) => {
    return (
        <div className='flex gap-2 w-[90%] border border-gray-200 rounded-xl p-5'>
            <Image className='w-[40px] h-[40px]' src={data.icon} alt='whyChooseUs.png' />
            <div className='space-y-3'>
                <h1 className='text-2xl font-medium'>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default WhyChooseUs