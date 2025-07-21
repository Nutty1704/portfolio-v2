"use client"

import gsap from 'gsap'
import React from 'react'

const NavItem = ({ text, href, className}) => {

  const handleClick = () => {
    gsap.to(window, {
      duration: 1.3,
      scrollTo: href,
      ease: 'power2.inOut',
    });
  }

  return (
    <li onClick={handleClick} className={`cursor-pointer ${className}`}>
      { text }
    </li>
  )
}

export default NavItem