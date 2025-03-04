import React from 'react'

interface Props{
    title:string;
    year:string;
}

const SkilsItem = ({title, year}:Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
  <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold
 text-[18px] border-[2px] border-[#55e6a5]'>
    {year}

</span>
<h1 className='mt-[2rem] font-semibold uppercase mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
    {title}
</h1>
<p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 text-justify'>
As a developer, I specialize in building high-performance web applications with server-side rendering and static site generation. Leveraging I create SEO-friendly, scalable solutions, ensuring fast load times and seamless user experiences. My expertise includes API integration, efficient deployment, and modern development practices.
</p>
    </div>
  )
}

export default SkilsItem