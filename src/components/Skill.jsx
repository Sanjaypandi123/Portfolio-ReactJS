import React from 'react'
import '../Csss/Skill.css'
import bootstrap from '../assets/Bootstrap.jpg'
import css from '../assets/css.jpg'
import html from '../assets/html.jpg'
import js from '../assets/javascript.jpg'
import mongo from '../assets/mongodb.jpg'
import react from '../assets/react.jpg'

const Skill = () => {
  return (
    <>
    <div className="container-fluid wrapper skill-wrapper2">
                    <div className="heading2">
            <h1>SKILL</h1>
            
          </div>
          <div className=" skills mx-5">
            <div className="skillbox">
              <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2><i className="fa-brands fa-html5"></i></h2>
              </div>
              <div className="bottom">
                <h2>Html</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2><i className="fa-brands fa-css3"></i></h2>
              </div>
              <div className="bottom">
                <h2>Css</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2><i className="fa-brands fa-bootstrap"></i></h2>
              </div>
              <div className="bottom">
                <h2>Bootstrap</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2><i className="fa-brands fa-js"></i></h2>
              </div>
              <div className="bottom">
                <h2>JavaScript</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2><i className="col fa-regular fa-compass"></i></h2>
              </div>
              <div className="bottom">
                <h2>MongoDb</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2><i className="fa-brands fa-react"></i></h2>
              </div>
              <div className="bottom">
                <h2>React</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon1">
              <div className="top">
                <h2><i className="fa-brands fa-node-js"></i></h2>
              </div>
              <div className="bottom">
                <h2>Node</h2>
              </div>
            </div>
            <div className=" skill-icon skill-icon2">
              <div className="top">
                <h2><i className="fa-brands fa-node-js"></i></h2>
              </div>
              <div className="bottom">
                <h2>Node</h2>
              </div>
            </div>
            </div>
          </div>
            
          
    
        </div>
    </>
  )
}

export default Skill