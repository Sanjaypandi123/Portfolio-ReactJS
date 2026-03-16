import React, { useState } from 'react'

import { motion } from "framer-motion"

import '../Csss/Portfol.css'

import budget from "../assets/budgetpic.png";
import string from "../assets/stringpic.png";

const Minproject = () => {

    const [open, setOpen] = useState(false)

    const [selectedProject, setSelectedProject] = useState(null)

    let MinprojectArray = [

        {
            Id: 1,
            Mainimg: budget,
            MinproLink: "https://budget-tracker-jq.vercel.app/",
            MinproName: "Budget-Tracker",
            Languages: "Html , Css , Jquerry",
            image: budget
        },
        {
            Id: 2,
            Mainimg: string,
            MinproLink: "https://string-task.vercel.app/",
            MinproName: "String-Task",
            Languages: "Html , Css , JavaScript",
            image: string
        }

    ]

    let cardOpen = (MinprojectArray) => {
        setSelectedProject(MinprojectArray)
        setOpen(true)
    }

    let MINIPROJECT = MinprojectArray.map((e) => (

        <motion.div key={e.Id} className="wrappers" onClick={() => cardOpen(e)}

            initial={{ translateY: "300px", opacity: 0 }}
            animate={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}

        >
            <div className="card" >
                <img src={e.Mainimg} alt="" />
                <div className="view">
                    <h4 className='text-dark'>View Project</h4>
                </div>
            </div>
        </motion.div>

    ))


    return (
        <>
            <div className="project-wrapper">

                <motion.div className="heading">
                    <h1>WORKS  <p style={{ marginLeft: "-45px" }}> MINI<span>PROJECT</span></p></h1>

                </motion.div>


                <div className="proj-wrapper">
                    <div className="project-content">
                        {MINIPROJECT}
                    </div>
                    {/* Popup Modal */}
                    {open && selectedProject && (
                        <div className="popup-overlay">

                            <motion.div className="popup-box"

                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: .5 }}

                            >

                                <button className="close-btn" onClick={() => setOpen(false)}>X</button>

                                <h2>{selectedProject.MinproName}</h2>

                                <div className="project-info">
                                    <div className="left">
                                        <p><i className="fa-solid fa-briefcase"></i> -- Project : {selectedProject.MinproName}</p>
                                        <p><i className="fa-solid fa-laptop-code"></i> -- Language : {selectedProject.Languages}</p>
                                    </div>
                                    <div className="right">
                                        <p><i className="fa-solid fa-link"></i> -- Preview : <a href={selectedProject.MinproLink} target='_blank'>{selectedProject.MinproLink}</a></p>
                                    </div>
                                </div>

                                <div className="pic">
                                    <img src={selectedProject.image} alt="" />
                                </div>

                            </motion.div>

                        </div>
                    )}
                </div>



            </div>
        </>
    )
}

export default Minproject