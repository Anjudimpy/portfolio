import { XMarkIcon } from '@heroicons/react/20/solid'; // Ensure correct import path
import Link from 'next/link';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'hidden';
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-16 left-30 right-2 pt-4 bottom-30 z-[1000000] bg-[#09101a]`}>
      <div className='w-[25vw] h-[20vh]  flex flex-col items-center justify-center'>
      <Link href="#"><div className="nav-link-mobile">HOME</div></Link>
<Link href="#services"><div className="nav-link-mobile">SERVICES</div></Link>
<Link href="#about"><div className="nav-link-mobile">ABOUT</div> </Link>
<Link href="#projects"><div className="nav-link-mobile">PROJECTS</div></Link>
{/* <Link href="#"><div className="nav-link">BLOG</div></Link> */}
<Link href="#footer"><div className="nav-link-mobile">CONTACT</div></Link>
      </div>
      <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-1 right-1 w-[10px] h-[10px] text-yellow-400'>
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
