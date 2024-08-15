import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillTexts from "../sub/SkillText";

const Skill = () => {
  return (
    <section 
    id='skills'
    className=' flex flex-col items-center justify-center gap-3 h-full relative  '
    style={{transform:"scale(0.9)"}}
    >
            <SkillTexts/>
            <div className='flex flex-row justify-around flex-wrap mt-5 gap-5 items-center'>
            {Frontend_skill.map( (image,index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
    )) }
    </div>  
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Backend_skill.map( (image,index)=>(
        <SkillDataProvider
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height}
        index={index}
        />
    )) }
    </div> 
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Full_stack.map( (image,index)=>(
        <SkillDataProvider
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height}
        index={index}
        />
    )) }
    </div> 
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Other_skill.map( (image,index)=>(
        <SkillDataProvider
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height}
        index={index}
        />
    )) }
    </div> 

    <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
           <video
           className='w-full h-auto '
           preload='false'
           playsInline
           muted
           loop
           autoPlay
           src='/cards-video.webm' 
           />
        </div>

    </div>
    </section>
  )
}

export default Skill