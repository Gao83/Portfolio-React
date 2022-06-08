import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BsBookmarkFill } from 'react-icons/bs'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {

  const [ activeNav, setActiveNav ] = useState('#home')
  
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkFill /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>


    </nav>
  )
}

export default Nav