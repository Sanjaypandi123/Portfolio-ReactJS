import React from 'react'
import '../Csss/About.css'
import cv from '../assets/Sanjay Resume.pdf'

import { motion } from "framer-motion"


const About = () => {
  return (
    <>
      <div className="about-wrapper">


        <div className="heading">
          <h1>RESUME <p>ABOUT <span>ME</span></p></h1>

        </div>

        <div className="about-content">
          <div className="info-wrapper">
            <motion.div

              initial={{ translateX: "-500px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <h1>PERSONAL INFOS</h1>
            </motion.div>
            <motion.div className="img1 d-lg-none mb-3"

              initial={{ translateX: "-600px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >

            </motion.div>
            <div className=" prsenolContent">
              <motion.div className="name info"

                initial={{ translateX: "-700px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 1 }}

              >
                <h4 className='tag'>Name :</h4>
                <h4 className='tag2'>Sanjay PandiDurai</h4>
              </motion.div>
              <motion.div className="phno info"

            initial={{ translateX:"-800px"}}
            animate={{ translateX:"0px"}}
            transition={{ duration:1}}

          >
                <h4 className='tag'>Phone :</h4>
                <h4 className='tag2'>+91 8220316161</h4>
              </motion.div>
              <motion.div className="age info"

            initial={{ translateX:"-900px"}}
            animate={{ translateX:"0px"}}
            transition={{ duration:1}}

          >
                <h4 className='tag'>Age :</h4>
                <h4 className='tag2'>20</h4>
              </motion.div>
              <motion.div className="address info"

            initial={{ translateX:"-1000px"}}
            animate={{ translateX:"0px"}}
            transition={{ duration:1}}

          >
                <h4 className='tag'>Address :</h4>
                <h4 className='tag2'>Samyapuram, Trichy</h4>
              </motion.div>
            </div>

            <motion.div className="BTN py-5"

            initial={{ translateX:"-1100px"}}
            animate={{ translateX:"0px"}}
            transition={{ duration:1}}

          >
              <a href={cv} download className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></a>
            </motion.div>
          </div>

          <motion.div className="study-wrapper"

            initial={{ translateY: "800px" }}
            animate={{ translateY: "0px" }}
            transition={{ duration: 1 }}

          >
            <h1>Education</h1>


            <div className="study-box">
              <motion.div className="study"

                initial={{ translateX: "400px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 1 }}

              >
                <span className="badge mb-2">2019 - 2020 </span>
                <h5 className=''>Secondary School (SSLC)  <span className="">–   Samayapuram</span></h5>
                <p>Government High School S.Kannanur.</p>
                <p className='percentege'>71%.</p>
              </motion.div>


              <motion.div className="study"

                initial={{ translateX: "600px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 1 }}

              >
                <span className="badge">2020 - 2022</span>
                <h5 className=''>Higher Secondary (HSC) <span className="">– Mannachanallur</span></h5>
                <p>Government Boys Hr Sec School Mannachanallur.</p>
                <p className='percentege'>46%.</p>
              </motion.div>


              <motion.div className="study"

                initial={{ translateX: "600px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 1 }}

              >
                <span className="badge">2022–2025 </span>
                <h5 className=''>BACHELOR DEGREE  <span className="">– Bharathidasan University</span></h5>
                <p>SRM TRICHY ARTS AND SCIENCE COLLEGE, Irungalur.</p>
                <p className='percentege'>60%.</p>
              </motion.div>
              <motion.div className="study touch"

                initial={{ translateX: "800px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 1 }}

              >
                <h5 className=''>Stay Touch</h5>
                <div className="about-btns">
                  <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-github"></i></p></a>
                  <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-whatsapp"></i></p></a>
                  <a className='buzz-float' href="/"><p><i className="fa-brands fa-square-instagram"></i></p></a>
                  <a className='buzz-float' href="/"><p><i className="fa-brands fa-linkedin"></i></p></a>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </>
  )
}

export default About