import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-[-30] '
     id='projects'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-20'>
           <ProjectCard
           src='/SpaceWebsite.png'
           title='Modern Next.js Portfotio'
           description='it is my project'
           />
           <ProjectCard
           src='/SpaceWebsite.png'
           title='Modern Next.js Portfotio'
           description='it is my project'
           />
           <ProjectCard
           src='/SpaceWebsite.png'
           title='Modern Next.js Portfotio'
           description='it is my project'
           />
        </div>

    </div>
  )
}

export default Projects