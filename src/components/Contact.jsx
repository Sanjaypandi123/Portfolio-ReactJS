import React from 'react'
import Header from './Header'
import '../Csss/Contact.css'

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
      <div className="container-fluid wrapper contact-wrapper">
        <div className="heading ">
          <h1>CONTACT <p>GETIN <span>TOUCH</span></p></h1>
        </div>

        <div className="contact-content">
          <div className="left">
            <motion.div

              initial={{ translateX: "-600px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <h4>Don't be shy !</h4>
            </motion.div>
            <motion.div className="cont"

              initial={{ translateX: "-700px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <span><i className="fa-solid fa-location-dot"></i></span>
              <div className="content">
                <p className='badge'>ADDRESS POINT</p>
                <h6>Samayapuram Trichy TamilNadu India 621112</h6>
              </div>
            </motion.div>
            <motion.div className="cont"

              initial={{ translateX: "-800px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <span><i className="fa-solid fa-envelope"></i></span>
              <div className="content">
                <p className='badge'>MAIL ME</p>
                <a href="/">sanjayelanchikani@gmail.com</a>
              </div>
            </motion.div>
            <motion.div className="cont"

              initial={{ translateX: "-900px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <span><i className="fa-solid fa-phone"></i></span>
              <div className="content">
                <p className='badge'>CALL ME</p>
                <a href="/">+91-8220316161</a>
              </div>
            </motion.div>
            <motion.div className="contact-btns"

              initial={{ translateX: "-1000px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <a className='buzz-float' href="https://github.com/Sanjaypandi123" target='_blank'><p><i class="fa-brands fa-github"></i></p></a>
              <a className='buzz-float' href="https://wa.me/8220316161" target="_blank"><p><i class="fa-brands fa-whatsapp"></i></p></a>
              <a className='buzz-float' href="mailto:sanjayelanchikani@gmail.com" target='_blank'><p><i class="fa-regular fa-envelope"></i></p></a>
              <a className='buzz-float' href="https://www.linkedin.com/in/pandi-e-059358395/" target='_blank'><p><i class="fa-brands fa-linkedin-in"></i></p></a>
            </motion.div>
          </div>
          <div className="right">
            <motion.div className="name"

              initial={{ translateX: "700px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <input type="text" placeholder='YOUR NAME' />
              <input type="Email" placeholder='YOUR E-MAIL' />
            </motion.div>
            <motion.div className="contact"

              initial={{ translateX: "800px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <input type="text" placeholder='YOUR SUBJECT' />
            </motion.div>
            <motion.div className="contact"

              initial={{ translateX: "900px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <textarea name="" id="" cols='50' rows='5' placeholder='YOUR MESSAGE'></textarea>
            </motion.div>
            <motion.div className="BTN "

              initial={{ translateX: "1000px" }}
              animate={{ translateX: "0px" }}
              transition={{ duration: 1 }}

            >
              <button className='button' ><span><b>SEND MESSAGE</b></span> <p><i className="fa-solid fa-paper-plane"></i></p></button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact