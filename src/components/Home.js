import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/css/Home.css"

const Home = () => {
  const navigate = useNavigate();
  const handleclick =()=>{
    navigate('/contact')
  }
  return (
  <>
    <div className='container-two-column'>
      <div className="section-hero-data">
        <p className="hero-top-data">This is Me</p>
        <div className="hero-heading"><h1>HARSH JOSHI</h1></div> 
        <p className="hero-para">
          I'm Harsh Joshi. A Full Stack Developer
        </p>
        <p className="hero-para">
        and freelancer. A Full Stack Developer
        </p>
      <button onClick={handleclick} className='btn-hireme'>
     Hire me
        </button>
      </div>

        <div className="section-hero-image">
          <picture>
            <img src="./images/photo.PNG" alt="" />
          </picture>
          <hr/>
        </div>

    </div>
   
    </>
  )
};

export default Home
