import Image from 'next/image'
import React from 'react'

const Service = ({ data }) => {
    return (
        <div className='flex gap-4 w-[90%] border border-gray-200 rounded-xl p-5 shadow-xl'>
            <Image className='w-[130px]' src={data.image} alt='servce.png' />
            <div className='flex flex-col justify-between'>
                <h1 className='font-medium text-2xl'>{data.title}</h1>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default Service