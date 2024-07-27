
import React from 'react'
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[#0e131b] mt-[10vh] bg-cover bg-center">
        <Particle/>
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
<div>
<h1 className='text-[35px] md:text-[50px] text-white font-bold'>
  HI{','} I AM <span className='text-yellow-300'>ANJU</span>
</h1>

<TextEffect/>
<p className='mt-[1.5rem] text-[16px] text-justify text-[#ffffff92]'>
A highly motivated and dedicated student with a strong passion for technology and a desire to contribute to innovative projects. Always
want to learn something new in technology field. 

</p>
<div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
<button className='px-[2rem] hover:bg-yellow-300 transition-all duration-200
py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
  <p>Download Cv</p>
  <a
        href="/cv.pdf"
        download="ANJU_CV.pdf"
        className=""
      >
     <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem]'/>
  </a>
</button>
<button className='flex items-center space-x-2'>
  <PlayCircleIcon className='vedio-button bg-[#55e6a5]  h-10 p-1 w-10 rounded-ful'/>
  <p className='text-[20px] font-semibold text-white'>
    Watch The Video
  </p>
</button>
</div>
</div>
<div data-aos="zoom-in" className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
<Image
        src="/dp1.png" // Correct path
        alt="user"
        layout="fill" // Use fill for covering the container
        className="object-cover rounded-full"
      />
</div>
        </div>
    </div>
  )
}

export default Hero