import React from 'react'
import ProjectCard from './ProjectCard'
import projects from "../../data/Projects.js"

const Projects = () => {
  return (
    <div>
      <h1 id='projects' className='text-3xl text-purple-800 font-bold my-4 text-center'>Projects</h1>
    <div className='p-20 flex flex-wrap gap-10'>
    {projects.map(project => (
          <ProjectCard key={project.id} src={project.src} title={project.title} description={project.description} />
        ))}

    </div>
    </div>  
  )
}

export default Projects
