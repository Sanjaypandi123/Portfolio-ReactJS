import React from 'react'
import Header from './Header'
import '../Csss/Home.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

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
              <div className="BTN pt-3">
                {/* <Link className='button' to="/about"><span><b>MORE ABOUT ME</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></Link> */}
                <button className='button' onClick={gotoabout} ><span><b>MORE ABOUT MEe</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></button>
              </div>
          </div>
      </div>



    </>
  )
}

export default Home