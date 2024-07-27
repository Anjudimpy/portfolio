import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[8rem]'>
        <h1 className='heading'>
            pro<span className='text-yellow-300'>ject</span>
        </h1>
<div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2
lg:grid-cols-3 gap-[3rem]'>
    <div data-aos="fade-up ">
        <div className='group transform relative bgimage1 dropdown-content cursor-pointer hover:-translate-y-6 transition-all
        duration-200  w-[100%] h-[200px] md:h-[300px]'>
          <Link href={'https://netlifyyt-2plw.vercel.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white bg-transparent '>
            Live Demo {'->'}  </Link>
            <Link href={'https://github.com/Anjudimpy/ampeet'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center group-hover:text-white '>
            Code Link {'->'} </Link>

        </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="300">
        <div className='group transform  cursor-pointer bgimage2 dropdown-content hover:-translate-y-6 transition-all
        duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
              <Link href={'https://aboutmoviere.netlify.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white '>
            Live Demo {'->'} </Link>
            <Link href={'https://github.com/Anjudimpy/Movie-Review'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center group-hover:text-white '>
            Code Link {'->'} </Link>
        </div>
        
    </div>
    <div data-aos="fade-up" data-aos-delay="600">
        <div className='group transform  cursor-pointer bgimage3 dropdown-content hover:-translate-y-6 transition-all
        duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
 <Link href={'https://etasks.netlify.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white '>
            Live Demo {'->'} </Link>
            <Link href={'https://github.com/Anjudimpy/Interview'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center group-hover:text-white '>
            Code Link {'->'} </Link>
        </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="900">
        <div className='group transform bgimage4 dropdown-content cursor-pointer hover:-translate-y-6 transition-all
        duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
 <Link href={'https://thmsystm.netlify.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white '>
            Live Demo {'->'} </Link>
            <Link href={'https://github.com/Anjudimpy/ecommerce-hms'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center group-hover:text-white '>
            Code Link {'->'} </Link>
        </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="1200">
        <div className='group transform  bgimage5 dropdown-content cursor-pointer hover:-translate-y-6 transition-all
        duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
 <Link href={'https://reliable-queijadas-ca07a0.netlify.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white '>
            Live Demo {'->'} </Link>
            <Link href={'https://github.com/Anjudimpy/Figma'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center  group-hover:text-white '>
            Code Link {'->'} </Link>
        </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="1600">
        <div className=' group transform bgimage6 dropdown-content cursor-pointer hover:-translate-y-6 transition-all
        duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
 <Link href={'https://w3cloneweb.netlify.app/'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center mt-[35%] group-hover:text-white '>
            Live Demo {'->'} </Link>
            <Link href={'https://github.com/Anjudimpy/w3school-clone'} className='font-bold text-transparent text-[18px] underline under flex w-full justify-center  group-hover:text-white '>
           Code Link {'->'} </Link>
        </div>
    </div>

</div>

    </div>
    </section>
  )
}

export default Projects