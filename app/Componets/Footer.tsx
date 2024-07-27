import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section ">
    <div className='pt-[6rem] pb:[4rem] bg-[#09101a]'>
    <h1 className='heading mb-[8rem]'>
            Con<span className='text-yellow-300 '>tact</span>
        </h1>
    <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
    w-[80%] mx-auto gap-[3rem]'>
    <div className=' relative text-red-600  animate-spin bg-yellow-300  -left-1  md:w-[6.5rem] md:h-[6.5rem] w-[5.5rem] h-[5.5rem] border border-t-2  rounded-full'>
        <div className='text-red-600   -left-1  md:w-[6.5rem] md:h-[6.5rem] w-[5.5rem] h-[5.5rem] border border-t-2  rounded-full'></div>
    </div>
<div className=' group flex items-center  absolute space-x-6'>
    <div className='md:w-[6rem] md:h-[6rem]  w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#55e6a5]'>
<MapIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-white group-hover:animate-bounce'/>
    </div>
    <div>

        <h1 className='text-[25px] mb-[0.2rem] font-semibold group-hover:text-yellow-300 transform transition duration-300 text-white'>
            Address
        </h1>
        <p className='text-[17px] w-[90%] group-hover:text-[#55e6a5] text-white opacity-60'>Sultanganj Bihar 813213</p>
    </div>
</div>


<div>
<div className=' relative text-red-600  animate-spin bg-yellow-300  -left-1 w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'>
        <div className='text-red-600   -left-1  w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'></div>
    </div>
<div className=' group absolute md:-mt-[6.3rem] -mt-[5.5rem] md:ml-1 ml-0.5 flex items-center space-x-6'>
    <div className='md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
<DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-white group-hover:animate-spin'/>
    </div>
    <div>
        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-yellow-300'>
            Phone
        </h1>
        <p className='text-[17px] w-[90%] text-white opacity-60 group-hover:text-[#55e6a5]'>+918294403079 <br/>+917061336192</p>
    </div>
</div>
</div>


<div>
<div className=' relative text-red-600  animate-spin bg-yellow-300  -left-1 w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'>
        <div className='text-red-600   -left-1  w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'></div>
    </div>
<div className='group absolute md:-mt-[6.3rem] -mt-[5.3rem] flex items-center space-x-6'>
    <div className='md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
<EnvelopeIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-white group-hover:animate-pulse'/>
    </div>
    <div>
        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-yellow-300'>
        Send Us Email
        </h1>
        <p className='text-[17px] w-[90%] text-white opacity-60 group-hover:text-[#55e6a5]'>anjukr@55555gmail.com</p>
    </div>
</div>
</div>


<div>
<div className=' relative text-red-600  animate-spin bg-yellow-300  -left-1 w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'>
        <div className='text-red-600   -left-1  w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] border border-t-2  rounded-full'></div>
    </div>

<div className='group absolute flex md:-mt-[6.3rem] -mt-[5.4rem] md:-ml-1  md:-m-0 items-center space-x-6'>
    <div className='md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
<FaGithub className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] group-hover:animate-ping text-white'/>
    </div>
    <div>
        <h1 className='text-[25px] mb-[0.2rem] group-hover:text-yellow-300 font-semibold text-white'>
        GitHub
        </h1>
        <p className='text-[17px] w-[90%] text-white opacity-60  group-hover:text-[#55e6a5]'>
           <Link href={'https://github.com/Anjudimpy?tab=repositories'}>Anjudimpy</Link>
            </p>
    </div>
</div>
</div>
<div>
<div className=' relative text-red-600  animate-spin bg-yellow-300  -left-1  md:w-[6.5rem] md:h-[6.5rem] w-[5.5rem] h-[5.5rem] border border-t-2  rounded-full'>
        <div className='text-red-600   -left-1  md:w-[6.5rem] md:h-[6.5rem] w-[5.5rem] h-[5.5rem] border border-t-2  rounded-full'></div>
    </div>
<div className='group absolute md:-mt-[6rem] -mt-[5rem] flex items-center space-x-6'>
    <div className='md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
<FaLinkedin className='md:w-[4.5rem] rounded-full md:h-[4.5rem] w-[3.5rem] h-[3.5rem] text-white group-hover:animate-ping'/>
    </div>
    <div>
        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-yellow-300'>
        LinkedIn
        </h1>
        <p className='text-[17px] w-[95%] text-white opacity-60 group-hover:text-[#55e6a5]'>
            <Link href={'http://linkedin.com/in/anju-kumari-%201a1496236'}>AnjuKumari</Link>
        </p>
    </div>
</div>
</div>
    </div>
    {/* <div className='w-[80%] mt-[2rem] pb-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center'> */}
 <div className='text-[16px] mb-[2rem] mt-[2rem] pb-[2rem] flex justify-center md:mb-0 text-white opacity-20'>
Webdev Anju 2024 | All Rights Reserved
 </div>
 {/* <div className='flex items-center space-x-10'>
    <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
    <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
    <p className='text-[16px] text-white opacity-20'>Sitemap</p>
 </div> */}
    </div>
    {/* </div> */}
    </footer>
  );
}

export default Footer