import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt[8rem]'>
<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
<div>
<h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
    ABOUT ME
</h1>
<h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem]
 leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
    Transforming <span className='text-yellow-300'>Vision</span>
</h2>
<div className='mb-[3rem] flex items-center md:space-x-10'>
<span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
<p className='text-[15px] pr-10 text-justify text-slate-300 w-[80%]'>
I possess extensive export in designing, developing, and
 deploying robust web applications. My expertise spans across front-end technologies such as HTML, 
 CSS, JavaScript, TypeScript, and React.js, as well as frameworks including Next Js. Proficient in database 
 management with SQL and Workbench databases, I excel in creating 
 seamless, high-performance applications. I ensure efficient deployment 
 and maintenance of applications. My collaborative approach, combined with a
  commitment to best practices, drives the delivery of scalable and 
  secure solutions, tailored to meet diverse business needs. Deleniti commodi et placeat sunt? Quia eius illo ipsa sunt aperiam debitis?
</p>
</div>
<button className='px-[2rem] hover:bg-yellow-300 transition-all duration-200
py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
  <p>Download Cv</p>
  <a
        href="/cv1.pdf"
        download="ANJU_CV.pdf"
        className=""
      >
     <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem]'/>
  </a>
</button>
</div>
<div data-aos="fade-left" className='lg:w-[500px] bg-yellow-400 mx-auto md:mx-0 mt-[2rem] lg:h-[500px] w-[300px] h-[300px] relative'>
    
<Image
  src="/dp2.avif" 
  alt="user"
  layout="fill" 
  objectFit="contain"
  className="relative z-[11] w-[100%] h-[100%] object-contain"
 />
 <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[2rem] right-[2rem]'>

 </div>
</div>
</div>

    </div>
    </section>
  )
}

export default About