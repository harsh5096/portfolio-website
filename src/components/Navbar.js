import React, { useRef }  from 'react'
import { Link } from 'react-router-dom'
import "../components/css/Navbar.css"

const Navbar = () => {
const navRef = useRef();

const showNavbar = () =>{
  navRef.current.classList.toggle("responsive_nav")
}
  return (
  
  <div className="navbar">

    <div className= "logo  active">
    <strong> Harsh Joshi</strong>
    </div>
   
      <nav ref={navRef} className='Nav-item'>
        <ul> 
        <li className='Nav-link'>
            <Link onClick={showNavbar} to='/'> Home </Link>
        </li>
        <li className='Nav-link'>
            <Link onClick={showNavbar}  to='/About'>About me </Link>
        </li>
        <li className='Nav-link'>
            <Link onClick={showNavbar}  to='/Service'>Service </Link>
        </li>
        <li className='Nav-link'>
          <Link onClick={showNavbar}  to='/Skill'>Skill</Link>
        </li>
        <li className='Nav-link'>
            <Link onClick={showNavbar} to='/Contact'>Contact </Link>
        </li>
        </ul>
      </nav>
        

      <div className="whatsapp-link">
      <a href="https://wa.me/919548215889" target="_blank" rel="noopener noreferrer">
       <i className="fa-brands fa-whatsapp"></i> 
      </a> 
    </div>
      <div className="mobile-navbar-btn2">
      <ion-icon name="menu-outline" onClick={showNavbar} className="mbile-nav-icon1o"></ion-icon>
      </div>
  
    </div>


  )
}

export default Navbar
