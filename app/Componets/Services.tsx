import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services-section">
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
my <span className='text-yellow-300'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
        mt-[4rem] text-white'>
            <div data-aos="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-all
                duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
<CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
            My expertise spans across front-end technologies such as HTML, CSS, JavaScript, TypeScript, and React.js, as well as frameworks including Next Js.</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
            <div className='bg-orange-700 hover:scale-110 transform transition-all
                duration-300  uppercase font-semibold text-center p-[2rem]'>
<RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
               My expertise spans across back-end technologies such as Python, JavaScript, java as well as frameworks including Spring Boot. </p>
                </div>
            </div>
            
            <div data-aos="fade-left" data-aos-delay="500" >
            <div className='bg-blue-700 hover:scale-110 transform transition-all
                duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
<CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstack</h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
               My expertise spans across fullstack using HTML, CSS, JavaScript, React.js, and Next js. I handle SQL/firebase databases, develop secure APIs, and deploy on AWS, .vercel, and netlify.</p>
                </div>
            </div>


        </div>

    </div>
    </section>
  )
}

export default Services