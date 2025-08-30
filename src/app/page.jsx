import Image from 'next/image'
import React from 'react'
import main from "@/assets/main.png";
import { CircleCheck } from 'lucide-react';
import mainImage from "@/assets/mainImage.png";
import graph from "@/assets/graph.png";
import founder from "@/assets/founder.png";
import aiImage from "@/assets/aiImage.png";
import letsBuild from "@/assets/letsBuild.png";
import Service from '@/components/Service';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import { FEATURES_DATA, SERVICES_DATA } from '@/data';

const Page = () => {
  return (
    <>
      {/* First Section */}
      <div className='bg-[#F9FAFB] p-2 xl:p-0'>
        <div className='mx-auto w-full xl:w-[80%] py-10 xl:py-20'>
          <div className='text-4xl xl:text-7xl font-semibold leading-tight'>
            <h1>Empowering Growth Through</h1>
            <h1 className='text-[#6224A9]'>AI-Driven Investments</h1>
          </div>

          <div className='flex flex-col xl:flex-row justify-between mt-5 xl:mt-15'>
            <div className='xl:p-0 xl:w-[25%]'>
              <p className='text-gray-500 xl:text-xl'>
                Unlock smarter trading, strategic funding, and global investment opportunities.
                At Millennium Investments LLC, we leverage proprietary AI models and deep market insights
                to deliver sustainable, high-performance returns across U.S., Indian, and global markets.
              </p>
              <button className='bg-[#6224A9] text-white px-5 py-3 rounded-lg mt-5 xl:mt-10 text-sm xl:text-xl'>
                Get Started
              </button>
            </div>
            <Image src={main} alt='main' className='mt-5 xl:mt-0 h-[300px] object-cover xl:h-fit xl:w-[70%]' />
          </div>

          <div className='flex flex-col-reverse xl:flex-row justify-between mt-5 xl:mt-20'>
            <div className='mt-10 xl:mt-0 space-y-6 xl:space-y-0 flex flex-col text-center xl:text-left sm:flex-row lg:mx-auto lg:space-x-5 lg:w-[60%] xl:w-[50%] justify-between'>
              <div className='xl:space-y-3'>
                <h1 className='text-4xl xl:text-5xl font-semibold'>$23M <span className='text-[#6224A9]'>+</span></h1>
                <p className='text-gray-500'>Portfolio Managed</p>
              </div>
              <div className='xl:space-y-3'>
                <h1 className='text-4xl xl:text-5xl font-semibold'>10 <span className='text-[#6224A9]'>+</span></h1>
                <p className='text-gray-500'>years of expertise</p>
              </div>
              <div className='xl:space-y-3'>
                <h1 className='text-4xl xl:text-5xl font-semibold'>500 <span className='text-[#6224A9]'>+</span></h1>
                <p className='text-gray-500'>Clients</p>
              </div>
            </div>
            <p className='text-center xl:text-left xl:p-0 xl:w-[50%] xl:text-xl text-gray-500'>We are redefining the future of investments through AI-driven insights, precision funding strategies, and long-term partnerships designed to fuel global success.</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className='min-h-screen p-2 xl:p-0'>
        <div className='mx-auto w-full xl:w-[80%] py-20'>

          <div className=''>
            <h1 className='text-[#6224A9]  font-medium'>About Us</h1>
            <div className='mt-5 flex flex-col xl:flex-row justify-between'>
              <div className='font-semibold text-3xl xl:text-5xl'>
                <h1>Transforming Visions into</h1>
                <h1 className='text-[#6224A9]'>Financial Success</h1>
              </div>
              <p className='mt-5 xl:p-0 xl:mt-0 xl:w-[50%] xl:text-xl'>
                At Millennium Investments LLC, we believe in turning ambitions into reality through AI-powered strategies and data-driven insights. With a decade of expertise in equity markets, private funding, and high-frequency AI trading, we help clients unlock opportunities, scale growth, and build long-term wealth.
              </p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-5 justify-between mt-16'>
            <div className='lg:w-[50%]'>
              <div className='ml-3'>
                <div className='xl:w-[80%] space-y-4'>
                  <div className='flex -ml-3 xl:text-2xl font-medium items-center'>
                    <CircleCheck color="#6224A9" />
                    <h1 className='pl-7'>Personalized Investment Strategies</h1>
                  </div>
                  <p className='border-l-2 border-[#6224A9] pl-10 pb-5 xl:text-xl text-gray-700'>We craft tailored portfolio solutions that align with your goals, risk profile, and long-term wealth objectives.</p>
                </div>
                <div className='xl:w-[80%] space-y-4'>
                  <div className='flex -ml-3 xl:text-2xl font-medium items-center'>
                    <CircleCheck color="#6224A9" />
                    <h1 className='pl-7'>Personalized Investment Strategies</h1>
                  </div>
                  <p className='border-l-2 border-[#6224A9] pl-10 pb-5 xl:text-xl text-gray-700'>We craft tailored portfolio solutions that align with your goals, risk profile, and long-term wealth objectives.</p>
                </div>
                <div className='xl:w-[80%] space-y-4'>
                  <div className='flex -ml-3 xl:text-2xl font-medium items-center'>
                    <CircleCheck color="#6224A9" />
                    <h1 className='pl-7'>Personalized Investment Strategies</h1>
                  </div>
                  <p className='pl-10 pb-5 xl:text-xl text-gray-700'>We craft tailored portfolio solutions that align with your goals, risk profile, and long-term wealth objectives.</p>
                </div>
              </div>
            </div>
            <Image src={mainImage} alt='main.png' className='h-[200px] xl:w-[50%] lg:h-[400px] object-cover rounded-xl' />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='min-h-screen bg-[#F9FAFB] p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <div className='xl:text-center'>
            <h1 className='text-[#6224A9] font-medium'>Services</h1>
            <h1 className='text-3xl xl:text-5xl font-semibold xl:leading-16'>Empowering Growth Through <span className='text-[#6224A9]'>Intelligent</span>  <br /> <span className='text-[#6224A9]'>Investment</span>  Solutions</h1>
            <p className='mt-5 xl:w-[70%] text-gray-700 mx-auto'>
              We combine AI-powered analytics, strategic funding, and deep market expertise to deliver solutions that maximize returns and drive sustainable growth.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 mt-20 gap-x-10 gap-y-10'>
            {
              SERVICES_DATA.map((ele, key) => <Service key={key} data={ele} />)
            }
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <div className='xl:text-center'>
            <h1 className='text-[#6224A9]'>Why Choose Us</h1>
            <h1 className='text-3xl xl:text-5xl font-semibold xl:leading-16'>Why Choose Millennium Investments LLC</h1>
            <p className='mt-5'>
              We deliver cutting-edge AI-powered investment solutions backed by proven expertise, data-driven strategies, and a deep commitment to client success.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 mt-20 gap-x-10 gap-y-10'>
            {
              FEATURES_DATA.map((ele, key) => <WhyChooseUs data={ele} key={key} />)
            }
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className='bg-[#F9FAFB] p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <div className='space-y-3 xl:space-y-0 flex flex-col xl:flex-row justify-between'>
            <h1 className='text-3xl xl:text-5xl font-semibold'>Pre-IPO & Private Equity Highlights</h1>
            <p className='xl:w-[50%]'>Empowering investors and businesses to unlock exclusive growth opportunities. Our expert-driven strategies help you access high-value private market deals, secure early-stage investments, and maximize returns with data-backed insights.</p>
          </div>
          <Image src={graph} alt='graph.png' className='object-cover h-[200px] xl:h-fit mt-10 xl:mt-20' />
        </div>
      </div>

      {/* Founder */}
      <div className='p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <h1 className='text-3xl xl:text-5xl font-semibold text-center'>Meet Our <span className='text-[#6224A9]'>Founder</span> </h1>
          <div className='flex flex-col xl:flex-row justify-between items-center gap-5 xl:mt-10'>
            <Image src={founder} alt='founder.png' className='h-[400px] object-cover xl:w-[50%] rounded-lg' />
            <div className='xl:w-[50%] xl:text-xl'>
              <p>Dr. Niranjan Patel, our CEO, carries forward a proud legacy rooted in a deep family heritage in finance. Inspired and mentored from an early age by his maternal grandfather, Late Shri Ramanbhai B. Patel—who founded the company in 1992—Dr. Patel leads with integrity, innovation, and purpose.
                <br /> <br />
                Under his visionary leadership, the company blends modern investment strategies with technological innovation, expanding its global footprint from its headquarters in Dubai while staying true to its founding principles. His mission is to honor the legacy of his grandfather while shaping a future driven by growth, ethics, and excellence.</p>
            </div>
          </div>
        </div>
      </div>


      {/* AI-Driven */}
      <div className='bg-[#F9FAFB] p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <h1 className='text-3xl xl:text-5xl font-semibold text-center'>AI-Driven Trading & HFT Edge</h1>
          <div className='flex justify-center mt-10'>
            <Image className='h-full lg:w-[80%] object-cover xl:w-[80%]' src={aiImage} alt='aiImage.png' />
          </div>
          <p className='mt-5 font-medium text-xl xl:text-2xl text-center'>Enabling smarter decisions, accurate forecasting, and a competitive edge. Most importantly, we can access and analyze macroeconomic data from all around the world within minutes, giving a real-time global perspective</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className='p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20'>
          <div>
            <h1 className='text-3xl xl:text-5xl font-semibold'>Harmonizing Voices: <br />Symphony of Collaboration</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 mt-20'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>

      {/* Lets Build */}
      <div className='bg-[#F9FAFB] p-2 xl:p-0'>
        <div className='mx-auto xl:w-[80%] py-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-5'>
          <Image className='h-[300px] lg:h-fit object-cover xl:w-[45%]' src={letsBuild} alt='letsBuild.png' />

          <div className='xl:w-[50%] xl:space-y-10'>
            <div className='space-y-5'>
              <h1 className='text-4xl xl:text-6xl font-medium'>Let’s Build Your Financial Future Together</h1>
              <p className='xl:w-[80%] xl:text-xl text-gray-600'>Partner with us to leverage cutting-edge AI, high-frequency trading, and advanced investment strategies. Take the first step toward smarter decisions and greater opportunities.</p>
            </div>

            <div className='space-x-5'>
              <button className='bg-[#6224A9] text-white px-5 py-3 rounded-lg mt-5 xl:mt-10 text-sm xl:text-xl'>
                Get Started
              </button>
              <button className='border border-gray-200 px-5 py-3 rounded-lg mt-5 xl:mt-10 text-sm xl:text-xl'>
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page
