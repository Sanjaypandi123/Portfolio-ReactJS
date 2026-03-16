import React from 'react'
import '../Csss/Skill.css'
import mongo from '../assets/mongo.jpg'

import { motion } from "framer-motion"

const Skill = () => {
  return (
    <>
      <div className=" skill-wrapper">
        <div className="heading">
          <h1>LANGUAGE <p> <span>SKILLS</span></p></h1>
        </div>
          <motion.div className="skillbox "
          
            initial={{translateY:"600px"}}
            animate={{translateY:"0px"}}
            transition={{duration:1}}

          >
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2 className='html'><i className="fa-brands fa-html5"></i></h2>
              </div>
              <div className="bottom">
                <h2>Html</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2 className='css'><i className="fa-brands fa-css3"></i></h2>
              </div>
              <div className="bottom">
                <h2>Css</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2 className='boot'><i className="fa-brands fa-bootstrap"></i></h2>
              </div>
              <div className="bottom">
                <h2>Bootstrap</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2 className='js'><i className="fa-brands fa-js"></i></h2>
              </div>
              <div className="bottom">
                <h2>JavaScript</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top mongo">
                <img src={mongo} alt=""/>
              </div>
              <div className="bottom">
                <h2>MongoDb</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2 className='react'><i className="fa-brands fa-react"></i></h2>
              </div>
              <div className="bottom">
                <h2>React</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2 className='node'><i className="fa-brands fa-node-js"></i></h2>
              </div>
              <div className="bottom">
                <h2>Node</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2 className='git'><i class="fa-brands fa-square-github"></i></h2>
              </div>
              <div className="bottom">
                <h2>Github</h2>
              </div>
            </div>
            
          </motion.div>
      </div>
    </>
  )
}

export default Skill