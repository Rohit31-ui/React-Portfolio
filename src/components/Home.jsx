import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-10" id="home">
      
      
      <div className="order-3  lg:order-1 flex justify-center lg:block lg:ml-40 lg:mt-60">
        <ul className="flex lg:flex-col gap-5">
          <li><a href="https://www.linkedin.com/feed/"><CiLinkedin className="text-3xl" /></a></li>
          <li><a href=""><FaInstagram className="text-3xl cursor-pointer" /></a></li>
          <li><a href="https://x.com/?lang=en-in&mx=2"><FaTwitter className="text-3xl" /></a></li>
          <li><a href="https://github.com/"><IoLogoGithub className="text-3xl" /></a></li>
        </ul>
      </div>

     
      <div className="order-2 flex-col *: text-center lg:text-left ml-0 lg:mt-60 lg:ml-28  mt-5 ">
        <h1 className="text-2xl lg:text-4xl  font-bold my-2">
          Hello I'm <span className="text-pink-900">Rohit Lad</span>
        </h1>
        <h3 className="text-2xl lg:text-3xl font-semibold my-2">Full Stack Web Developer</h3>
        <p className="text-lg lg:text-2xl my-2 lg:w-4/5">
          I design web applications for my clients and company. If you want to make your website, contact me.
        </p>
        <button className="bg-purple-800 text-white px-3 py-2 rounded-md my-3 mx-3 hover:bg-yellow-400">
  <a href="#contacts">Resume</a>
</button>

        <button className="bg-purple-800 text-white px-3 py-2 rounded-md my-3  hover:bg-yellow-400">
          <a href="#contacts">Contact Me</a>
        </button>
      </div>

    
      <div className="order-1 lg:order-3 lg:mt-10 lg:my-10 lg:py-16">
        <img src={heroImg} className="w-full lg:max-w-xl h-auto" alt="Hero" />
      </div>
    </div>
  );
}

export default Home;
