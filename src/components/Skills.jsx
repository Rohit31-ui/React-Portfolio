import React from 'react';
import Cards from './Cards.jsx';
import skills from "../../data/Skills.js";

const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='text-3xl text-purple-800 my-5 font-bold text-center'>Skills</h1>

      <div className='bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70] opacity-90 flex text-white items-center flex-wrap justify-center gap-10'>
        {skills.map(skill => (
          <Cards key={skill.id} src={skill.src} title={skill.title} subtitle={skill.subtitle} className=" text-3xl"/>
        ))}
      </div>
    </div>
  );
}

export default Skills;
