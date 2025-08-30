import React from 'react'
import bg from "@/assets/bg.jpg";
import Image from 'next/image';

const page = () => {
    return (
        <div>
            <Image src={bg} className='h-[300px] object-cover' alt='image'/>
            <div className='p-2 xl:p-0 xl:w-[60%] text-center mx-auto py-20'>
                <h1 className='text-2xl xl:text-4xl text-[#6224A9] font-medium'>Investor Relations Inquiry</h1>
                <form className='space-y-5 mt-20'>

                    <div className='grid xl:grid-cols-3 gap-x-3 gap-y-3 justify-between'>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>TITLE</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>FIRST NAME</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>LAST NAME</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 gap-x-3 justify-between'>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>EMAIL</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>COMPANY</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                    </div>

                    <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                        <label htmlFor="" className='text-gray-500 text-sm'>ADDRESS LINE 1</label>
                        <input className='border-none w-full text-sm' type="text" />
                    </div>

                    <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                        <label htmlFor="" className='text-gray-500 text-sm'>ADDRESS LINE 2</label>
                        <input className='border-none w-full text-sm' type="text" />
                    </div>

                    <div className='grid grid-cols-2 gap-x-3 justify-between'>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>CITY</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>STATE</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-3 justify-between'>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>ZIP CODE</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>COUNTRY</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-3 justify-between'>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>PHONE</label>
                            <input placeholder='(000) 000-0000' className='border-none w-full text-sm placeholder:text-sm' type="text" />
                        </div>
                        <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400'>
                            <label htmlFor="" className='text-gray-500 text-sm'>COMMENTS*</label>
                            <input className='border-none w-full text-sm' type="text" />
                        </div>
                    </div>

                    <p className='text-left text-sm'>By providing a telephone number and submitting this form, you are consenting to be contacted by phone or email in response to your Inquiry. Elliott will not send you an SMS text message. </p>

                    <div className='flex justify-start'>
                        <button className='border border-[#6224A9] text-[#6224A9] px-10 py-3 rounded-sm hover:border-white hover:cursor-pointer'>Submit</button>
                    </div>
                </form>
            </div>

            <div className='bg-[#F9FAFB] py-20'>
                <div className='w-[60%] mx-auto'>
                    <h1 className='text-4xl text-[#6224A9] font-medium'>Media Inquiry</h1>
                    <form className='space-y-5 mt-20 '>
                        <div className='grid grid-cols-2 gap-x-3 justify-between'>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>FIRST NAME</label>
                                <input className='border-none w-full text-sm' type="text" />
                            </div>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>LAST NAME</label>
                                <input className='border-none w-full text-sm' type="text" />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-x-3 justify-between'>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>EMAIL</label>
                                <input className='border-none w-full ' type="text" />
                            </div>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>COMPANY</label>
                                <input className='border-none w-full text-sm' type="text" />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-x-3 justify-between'>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>PHONE</label>
                                <input placeholder='(000) 000-0000' className='border-none w-full text-sm placeholder:text-sm' type="text" />
                            </div>
                            <div className='border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white'>
                                <label htmlFor="" className='text-gray-500 text-sm'>COMMENTS*</label>
                                <input className='border-none w-full text-sm' type="text" />
                            </div>
                        </div>

                        <p className='text-left text-sm'>By providing a telephone number and submitting this form, you are consenting to be contacted by phone or email in response to your Inquiry. Elliott will not send you an SMS text message. </p>

                        <div className='flex justify-start'>
                            <button className='border border-[#6224A9] text-[#6224A9] px-10 py-3 rounded-sm hover:border-white hover:cursor-pointer'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default page