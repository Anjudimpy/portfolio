import React from 'react'
import SkilsItem from './SkilsItem'
import SkilsLanguage from './SkilsLanguage'

const Skils = () => {
  return (
    <section id="skills" className="skills-section">
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
<h1 className='heading'>
    Education & <span className='text-yellow-300'>Skill</span>
</h1>
<div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1
md:grid-cols-2 gap-[2rem] items-center'>
    <div>
       <SkilsItem title=" Next Js Developer" year="2024"/> 
       <SkilsItem title="Front End  Developer" year="2023-2024"/> 
       <SkilsLanguage
       skill1="html"
       skill2="css"
       skill3="javascript"
       level1="w-[91%]"
       level2="w-[80%]"
       level3="w-[50%]"
       />
    </div>
    <div>
    <SkilsItem title="React Developer" year="2023-2024"/> 
       <SkilsItem title=" WEB  Developer" year="2023-2024"/> 
       <SkilsLanguage
       skill1="React Js"
       skill2="Next Js"
       skill3="TypeScript"
       level1="w-[80%]"
       level2="w-[78%]"
       level3="w-[50%]"
       />
    </div>

</div>
        </div></section>
  )
}

export default Skils