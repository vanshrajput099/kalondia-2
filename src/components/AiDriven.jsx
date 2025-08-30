import React from 'react'
import { CircleCheck } from 'lucide-react';

const AiDriven = () => {
    return (
        <div className='p-5 space-y-4'>
            <div className='flex gap-2 items-center'>
                <CircleCheck color="#6224A9" />
                <h1 className='text-2xl font-medium'>Ultra-Fast Execution</h1>
            </div>
            <p className=''>Leverage AI-powered High-Frequency Trading (HFT) algorithms to analyze markets and execute trades within microseconds.</p>
        </div>
    )
}

export default AiDriven