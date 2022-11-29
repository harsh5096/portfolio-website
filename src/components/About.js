import React from 'react'
import "../components/css/about.css"

const About = () => {
  return (
    
    <div className="about-container">
      <div className="aboutimg">
        <img src="./images/about.jpg" alt="" />
      </div>
      <div className='about-me'>
        <h1>Hello I am Harsh Joshi</h1>
      <p> I am Harsh Joshi . I am full Stack web developer currently living in a uttarakhand (INDIA) , currently building the moblie and web application for a newly Start Up , and also made a self-made portfolio website for us . i am graduated in 2022 at kumaon university and then i relise my interest in coding then i start as a web developer and  I am a always good Learner . I have learned all skills by youtube which are presented in skill page . If you want know more about me so you will ......
       <h4> CLICK DOWNLOAD BUTTON  <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
     </p>
     
       <a href="./images/resume.png" download= "computer" className="btn">Download cv
       <i class="fa fa-download" aria-hidden="true"></i>
       </a>
       </div>

    </div>
  )
}


export default About
