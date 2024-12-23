import React from 'react'
import aboutImg from "../assets/about.png"


const About = () => {
  return (
    <div className="mb-20 px-5 lg:px-20">
    <h1 id="about" className="text-3xl text-purple-800 font-bold my-4 text-center">About Me</h1>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-40 my-8">
      <div className="w-full lg:w-1/2">
        <img src={aboutImg} className="w-full lg:max-w-xl h-auto" alt="About" />
      </div>
      
      <div className="w-full my-3 text-xl lg:text-2xl lg:w-1/2">
        <p>As a web developer, I am passionate about creating visually appealing and user-friendly websites.</p>
        <p>With expertise in JavaScript, React, Node.js, Express, MongoDB, and SQL, I strive to deliver high-quality, responsive designs that meet client needs.</p>
        <p>I look forward to collaborating with you and bringing your web development projects to life. Feel free to explore my portfolio and contact me to discuss your project requirements.</p>
        <button className=" ml-4 my-2 bg-purple-800 text-white px-3 py-2 rounded-md my-3">Download CV</button>
      </div>
    </div>
  </div>
  
  )
}

export default About
