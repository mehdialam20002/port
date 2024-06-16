import React from 'react'
import Info from './Info'
import "./about.css"
import AboutImg from "../../assets/ResumePic.jpg"
import CV from "../../assets/cve (3).pdf"
const About = () => {
  return (
    <section className="about section" id='about'>
<h2 className="section_title">About Me</h2>
<span className="section_subtitle">My introduction</span>
<div className="about_container container grid">
    <img src={AboutImg} alt="" className="about_img" />
    <div className="about_data">
        <Info/>
        <p className="about_description">Hello, I am Mehdi Alam. I am currently doing Btech from MMDU(Ambala). I  am very committed towards my projects.I love to learn more and more about the new technologies of this new world.I have a passion to solve problems within a short time </p>
        <a style={{marginTop:"24px"}} download="" href={CV} className="button button--flex">Download CV</a>
    </div>
</div>


    </section>
  )
}

export default About