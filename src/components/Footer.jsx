import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a  className="link link-hover">Home</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Skills</a>
    <a className="link link-hover">Projects</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <a href="https://www.linkedin.com/feed/"><CiLinkedin className="text-3xl" /></a>
      <a href=""><FaInstagram className="text-3xl cursor-pointer" /></a>
      <a href="https://x.com/?lang=en-in&mx=2"><FaTwitter className="text-3xl" /></a> 
      <a href="https://github.com/"><IoLogoGithub className="text-3xl" /></a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()}</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
