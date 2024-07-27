import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Front End Developer',
        1500,
        'Web Developer',
        1500,
        'React Js Developer',
        1500,
        'Next Js Developer',
        1500,
        'Full Stack Developer',
        1500
      ]}
         speed={50}
     className='text-[2rem] text-[#55e6a5] font-bold'
      repeat={Infinity}
    />
  );
};

export default TextEffect;