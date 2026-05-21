import React from 'react'
import { Link } from "react-router-dom"






const Header = () => {

//  const toggleMode = () => {
//     let icons = document.querySelectorAll(".fa-brands")

//     icons.forEach((icon)=>{
//       icon.classList.toggle("dark")
//     })
//   }
  return (
    <>
    <header className='px-4'>
    {/* <div className="mode">
      <div className="light">
            <i className="fa-regular fa-moon"></i>
      </div>
      <div className="dark">
            <i className="fa-regular fa-sun"></i>
      </div>
    </div> */}
        <Link className='icons hom' to="/"><i className="fa-solid fa-house-chimney"></i></Link>
        <Link className='icons abt' to="/about"><i className="fa-solid fa-user"></i></Link>
        <Link className='icons skl' to="/skill"><i className="fa-solid fa-hand-fist"></i></Link>
        <Link className='icons port' to="/portfol"><i className="fa-solid fa-briefcase"></i></Link>
        <Link className='icons minpro' to="/minproject"><i className="fa-solid fa-code"></i></Link>
        <Link className='icons res' to="/resume"><i className="fa-solid fa-file"></i></Link>
        <Link className='icons cnt' to="/contact"><i className="fa-solid fa-phone"></i></Link>
        {/* <button onClick={toggleMode}>Toggle Mode</button> */}
    </header>


    </>
  )
}

export default Header