import React, { useState } from 'react'
import { motion } from "framer-motion"

import '../Csss/Portfol.css'

import carpro from "../assets/carproo.jpg"
import rollsyoys from "../assets/cimg1.jpg"
import bugatti from "../assets/cimg2.jpg"
import lotus from "../assets/cimg3.jpg"

import bambopro from "../assets/bamboopro.png";
import bags from "../assets/bimg1.jpg";
import box from "../assets/bimg2.jpg";
import spoons from "../assets/bimg3.jpg";



const Portfol = () => {

    const [open, setOpen] = useState(false)

    const [selectedProject, setSelectedProject] = useState(null)


    let ProjArray = [

        {
            Id: 1,
            Mainimg: carpro,
            ProjectLink: "https://geargarden-car-sales-service.vercel.app/",
            ProjectName: "Car Sales & Services",
            Laguages: "Html , Css",
            images: [rollsyoys, bugatti, lotus]
        },

        {
            Id: 2,
            Mainimg: bambopro,
            ProjectLink: "https://bamboo-products-js.vercel.app/",
            ProjectName: "Bamboo-Prodects",
            Laguages: "Html , Css , Javascript",
            images: [bags, box, spoons]
        }
        


    ]

    const handleOpen = (project) => {
        setSelectedProject(project)
        setOpen(true)
    }

    let project = ProjArray.map((e) => (

        <motion.div key={e.Id} className="wrappers" onClick={() => handleOpen(e)}

            initial={{ translateY: "300px",opacity:0  }}
            animate={{ translateY: "0px",opacity:1  }}
            transition={{ duration: 1 }}

        >
            <div className="card" >
                <img src={e.Mainimg} alt="" />
                <div className="view ">
                    <h4>View Project</h4>
                </div>
            </div>
        </motion.div>
    ))





    return (
        <>
            <div className="project-wrapper col-sm-pb-5"


            >

                <motion.div className="heading ">
                    <h1>WORKS  <p style={{ marginLeft: "-30px" }}> MY<span>PROJECT</span></p></h1>

                </motion.div>

                <div className="proj-wrapper">
                    <div className="project-content">
                        {project}
                    </div>
                    {/* Popup Modal */}
                    {open && selectedProject && (
                        <div className="popup-overlay">

                            <motion.div className="popup-box"
                            
                                initial={{scale:0}}
                                animate={{scale:1}}
                                transition={{duration:.5}}

                            >

                                <button className="close-btn" onClick={() => setOpen(false)}>X</button>

                                <h2>{selectedProject.ProjectName}</h2>

                                <div className="project-info">
                                    <div className="left">
                                        <p><span><i className="fa-solid fa-briefcase"></i></span> Project : {selectedProject.ProjectName}</p>
                                        <p><span><i className="fa-solid fa-laptop-code"></i></span> Language : {selectedProject.Laguages}</p>
                                    </div>
                                    <div className="right">
                                        <p><span><i className="fa-solid fa-link"></i></span> Preview : <a href={selectedProject.ProjectLink} target='_blank'>Live Preview <i className="fa-solid fa-link"></i></a></p>
                                    </div>
                                </div>

                                <div id="carouselExampleFade" style={{ borderRadius: "30px", overflow: "hidden", border: "none" }} className="mt-2 card carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {selectedProject.images.map((img, i) => (
                                            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                                                <img src={img} className="d-block w-100" />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </motion.div>

                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Portfol