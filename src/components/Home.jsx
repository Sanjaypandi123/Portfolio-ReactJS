import React from 'react'
import Header from './Header'
import '../Csss/Home.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import cv from '../assets/Sanjay Resume.pdf'

import { motion } from "framer-motion"


const Home = () => {

  const fun = useNavigate()

  let gotoabout = () => {
    fun('/portfol')
  }

  return (

    <>

      <Header />

      <div className="container-fluid home-wrapper sideimg">

        <motion.div className="img"

          initial={{ translateX: "-600px" }}
          animate={{ translateX: "0px" }}
          transition={{ duration: 1 }}

        >

        </motion.div>
        <motion.div className="crossbox"

          initial={{ translateX: "-400px", skewX: 0 }}
          animate={{ translateX: "0px", skewX: 20 }}
          transition={{ duration: 1 }}

        >

        </motion.div>

        <motion.div className="home-content"
          
            initial={{ translateX:"600px"}}
            animate={{ translateX:"0"}}
            transition={{ duration:1}}
          
          >
          <div className="img1 d-lg-none mb-1">

          </div>
          <motion.div className="btns">
            <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-github"></i></p></a>
            <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-whatsapp"></i></p></a>
            <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-instagram"></i></p></a>
            <a className='buzz-float' href="/"><p><i className="fa-brands fa-linkedin"></i></p></a>
          </motion.div>

          <div className="home-right">
            <motion.div
          
            initial={{ translateX:"600px"}}
            animate={{ translateX:"0"}}
            transition={{ duration:1}}
          
          >
                <h1>I'M SANJAY PANDIDURAI</h1>
            </motion.div>
            <motion.div
          
            initial={{ translateX:"800px"}}
            animate={{ translateX:"0"}}
            transition={{ duration:1}}
          
          >
              <h2>MERN DEVELOPER</h2>
            </motion.div>
            <motion.div
          
            initial={{ translateX:"1000px"}}
            animate={{ translateX:"0"}}
            transition={{ duration:1}}
          
          >
              <h6 className='pt-3'>I'm from Trichy. I have done my degree in computer science <br /> at SRM Trichy arts and science college. I have experience <br /> in web development. I'm eager to learn and grow in a challenging<br /> environment.That's all about me....</h6>
            </motion.div>
            <motion.div className="BTN px-2  col-md-6 col-sm-12 py-3"
          
            initial={{ translateX:"1200px"}}
            animate={{ translateX:"0"}}
            transition={{ duration:1}}
          
          >
              <button className='button' onClick={gotoabout} ><span><b>VIEW PROJECT</b></span> <p><i className="fa-solid fa-arrow-right"></i></p></button>
            </motion.div>
          </div>
          {/* <div className="BTN px-2 col-md-6 col-sm-12 py-3">
                <a href={cv} download className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></a>
              </div> */}

        </motion.div>
      </div>



    </>
  )
}

export default Home

