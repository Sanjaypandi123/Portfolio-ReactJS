import React from 'react'
import { Link } from "react-router-dom"






const Header = () => {
  return (
    <>
    
    <header className='px-5'>
        <Link className='icons hom' to="/home"><i className="fa-solid fa-house-chimney"></i></Link>
        <Link className='icons port' to="/portfol"><i className="fa-solid fa-briefcase"></i></Link>
        <Link className='icons abt' to="/about"><i className="fa-solid fa-user"></i></Link>
        <Link className='icons res' to="/resume"><i className="fa-solid fa-file"></i></Link>
        <Link className='icons skl' to="/skill"><i className="fa-solid fa-hand-fist"></i></Link>
        <Link className='icons cnt' to="/contact"><i className="fa-solid fa-phone"></i></Link>
    </header>


    </>
  )
}

export default Header