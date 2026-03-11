import React from 'react'
import Header from './Header'
import '../Csss/Home.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import cv from '../assets/Sanjay Resume.pdf'
// import Staticimg from './Staticimg';


const Home = () => {
  
    const fun=useNavigate()

  let gotoabout =()=>{
       fun('/about')
   }
  
  return (
    
    <>
    
    <Header/>
    
      <div className="container-fluid wrapper home-wrapper sideimg">
         
         <div className="img">

          </div>
          <div className="crossbox">

          </div>


        <div className="home-content">
          <div className="img1 d-lg-none mb-3">

          </div>
              <h1>I'M SANJAY PANDIDURAI</h1>
              <h2>MERN DEVELOPER</h2>
              <h6 className='pt-3'>I'm from Trichy. I have done my degree in computer science <br /> at SRM Trichy arts and science college. I have experience <br /> in web development. I'm eager to learn and grow in a challenging<br /> environment.That's all about me....</h6>
              <div className="row ">
                <div className="BTN px-2  col-md-6 col-sm-12 py-3">
                {/* <Link className='button' to="/about"><span><b>MORE ABOUT ME</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></Link> */}
                <button className='button' onClick={gotoabout} ><span><b>VIEW PROJECT</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></button>
              </div>
              <div className="BTN px-2 col-md-6 col-sm-12 py-3">
                {/* <Link className='button' to="/about"><span><b>MORE ABOUT ME</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></Link> */}
                <a href={cv} download className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></a>
              </div>
              <div className="btns py-3">
                              <a href="/"><p><i className="fa-brands fa-square-github"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-whatsapp"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-facebook"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-instagram"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-linkedin"></i></p></a>
                            </div>
              </div>
          </div>
      </div>



    </>
  )
}

export default Home

