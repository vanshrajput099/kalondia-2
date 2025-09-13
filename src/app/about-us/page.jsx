import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';

const page = () => {
    return (
        <div className='xl:space-y-20 xl:pb-20'>
            {/* Image Section */}
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">About Us</h1>
                </div>
            </div>
            <div className='p-2 xl:p-0 xl:w-[40%] text-center mx-auto py-20'>
                <div className='text-sm xl:text-base space-y-5 mt-5'>
                    <p>At Millennium Investment LLC, we are committed to redefining the future of investments through innovation, expertise, and trust. Our team of seasoned professionals brings together decades of experience across global markets, delivering tailored strategies that drive sustainable growth and long-term value for our clients. With a focus on precision and excellence, we combine traditional investment wisdom with cutting-edge technologies like AI and predictive analytics to unlock opportunities worldwide.</p>
                </div>
            </div>
            <div className="relative h-[300px] w-full">
                <Image src={bg} className='h-full object-cover' alt='image.png' />
                <div className="space-y-4 absolute inset-0 flex flex-col items-center justify-center text-center text-white w-[50%] mx-auto">
                    <h1 className="text-[#6224A9] text-2xl xl:text-4xl font-semibold">Our Culture</h1>
                    <p className='text-sm xl:text-base'>We foster a culture built on collaboration, integrity, and forward-thinking innovation. Every member of our team is encouraged to challenge ideas, embrace creativity, and pursue excellence in everything we do. By blending diverse perspectives with a shared vision, we create an environment where innovation thrives, and clients benefit from solutions that are as unique as their goals.</p>
                </div>
            </div>
            <div className='p-2 xl:p-0 xl:w-[40%] text-center mx-auto py-20'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Our Focus</h1>
                <div className='text-sm xl:text-base mt-5'>
                    <p>Our focus is on delivering measurable results through strategic investment management and technology-driven solutions. We prioritize deep market insights, accurate forecasting, and timely decision-making to stay ahead in an ever-changing financial landscape. By maintaining a balance between risk management and growth opportunities, we ensure our clients achieve consistent success and a strong competitive edge globally.</p>
                </div>
            </div>
        </div>
    )
}

export default page