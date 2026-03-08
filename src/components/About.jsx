import React from 'react'
import Header from './Header'
import '../Csss/About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid wrapper">
          <div className="img">

          </div>
          <div className="crossbox">

          </div>

          <div className="heading">
            <h1>RESUME <h2>ABOUT <span>ME</span></h2></h1>
            
          </div>

          <div className="about-wrapper mt-5">
            <div className="img1 d-lg-none mb-3">

          </div>
          
            <h1>PERSONAL INFOS</h1>
              <div className="row py-4">
                <div className="col-lg-6 lft ">
                  <h5>First Name : <span>Sanjay</span></h5>
                  <h5>Phone : <span>+91-8220316161</span></h5>
                  <h5>Age : <span>20</span></h5>
                </div>
                <div className="col-lg-6 rit">
                  <h5>Last Name : <span>PandiDurai</span></h5>
                  <h5>Nationality : <span>INDIAN</span></h5>
                  <h5>Address : <span>Trichy </span></h5>
                </div>
              </div>
              <h1>Hobbies</h1>
              <div className="row py-4">
                <div className="col-lg-4 col-md-4  hobis">
                  <h5 className='text-center'><span><i className="fa-solid fa-motorcycle"></i></span>Travals</h5>
                </div>
                <div className="col-lg-4 col-md-4  hobis">
                  <h5 className='text-center'><span><i className="fa-solid fa-music"></i></span>Travals</h5>
                </div>
                <div className="col-lg-4 col-md-4  hobis">
                  <h5 className='text-center'><span><i className="fa-solid fa-gamepad"></i></span>Travals</h5>
                </div>
              </div>
              <div className="BTN pt-3">
                <Link className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></Link>
              </div>
              {
                
              }
          </div>
      </div>
    </>
  )
}

export default About