import React from 'react'
import '../Csss/About.css'
import cv from '../assets/Sanjay Resume.pdf'


const About = () => {
  return (
  <>
    <div className="about-wrapper">
          

          <div className="heading">
            <h1>RESUME <p>ABOUT <span>ME</span></p></h1>
            
          </div>

          <div className="about-content">
            <div className="info-wrapper">
              <h1>PERSONAL INFOS</h1>
              <div className="img1 d-lg-none mb-5">

              </div>
                   <div className=" prsenolContent">
                     <div className="name info">
                       <h4 className='tag'>Name :</h4>
                       <h4 className='tag2'>Sanjay PandiDurai</h4>
                     </div>
                     <div className="phno info">
                       <h4 className='tag'>Phone :</h4>
                       <h4 className='tag2'>+91 8220316161</h4>
                     </div>
                     <div className="age info">
                       <h4 className='tag'>Age :</h4>
                       <h4 className='tag2'>20</h4>
                     </div>
                     <div className="address info">
                       <h4 className='tag'>Address :</h4>
                       <h4 className='tag2'>Samyapuram, Trichy</h4>
                     </div>
                   </div>
            
              <div className="BTN py-5">
                <a href={cv} download className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></a>
              </div>
           </div>

                <div className="study-wrapper">
                  <h1>Education</h1>
                  

                        <div className="study-box">
                          <div className="study">
                            <span className="badge mb-2">2019 - 2020 </span>
                            <h5 className=''>Secondary School (SSLC)  <span className="">–   Samayapuram</span></h5>
                            <p>Government High School S.Kannanur.</p>
                            <p className='percentege'>71%.</p>
                        </div>


                        <div className="study">
                          <span className="badge">2020 - 2022</span>
                          <h5 className=''>Higher Secondary (HSC) <span className="">– Mannachanallur</span></h5>
                          <p>Government Boys Hr Sec School Mannachanallur.</p>
                          <p className='percentege'>46%.</p>
                        </div>


                        <div className="study">
                            <span className="badge">2022–2025 </span>
                            <h5 className=''>BACHELOR DEGREE  <span className="">– Bharathidasan University</span></h5>
                            <p>SRM TRICHY ARTS AND SCIENCE COLLEGE, Irungalur.</p>
                            <p className='percentege'>60%.</p>
                        </div>
                        <div className="study">
                            <h5 className=''>Stay Touch</h5>
                            <div className="btns">
                              <a href="/"><p><i className="fa-brands fa-square-github"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-whatsapp"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-facebook"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-instagram"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-linkedin"></i></p></a>
                            </div>
                        </div>
                        </div>
                  </div>
                  
                </div>
          </div>
    {/* <div className="container-fluid wrapper about-wrapper1 d-flex align-items-center justify-content-center ">
          <div className="row justify-content-center">
            <h1 className='text-center pb-4'>Education</h1>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className='text-center pb-4'>School</h1>
                 <div className="timeline-item mb-5">
                    <div className="icon"><i className="fa-solid fa-briefcase"></i></div>
                    <span className="badge mb-2">2019 - 2020 </span>
                    <h5 className=''>Secondary School (SSLC)  <span className="">–   Samayapuram</span></h5>
                    <p>Government High School S.Kannanur.</p>
                    <p>71%.</p>
                 </div>
                 <div className="timeline-item">
                    <div className="icon"><i className="fa-solid fa-briefcase"></i></div>
                    <span className="badge mb-2">2020 - 2022</span>
                    <h5 className=''>Higher Secondary (HSC) <span className="">– Mannachanallur</span></h5>
                    <p>Government Boys Hr Sec School Mannachanallur.</p>
                    <p>46%.</p>
                 </div>
              </div> 
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className='text-center pb-4'>Collage</h1>
                 <div className="timeline-item mb-5">
                    <div className="icon"><i className="fa-solid fa-briefcase"></i></div>
                    <span className="badge mb-2">2022–2025 </span>
                    <h5 className=''>BACHELOR DEGREE  <span className="">– Bharathidasan University</span></h5>
                    <p>SRM TRICHY ARTS AND SCIENCE COLLEGE, Irungalur.</p>
                    <p>60%.</p>
                 </div>
              </div> 
          </div>
    </div> */}

    {/* <div className="container-fluid wrapper about-wrapper2 p-5">
                <h1 className='text-center pb-5'>Skills</h1>
      <div className="skills py-5">
        <div className="skill-img skill-img1">
          <img src={html} alt="" />
        </div>
        <div className="skill-img skill-img2">
          <img src={css} alt="" />
        </div>
        <div className="skill-img skill-img1">
          <img src={bootstrap} alt="" />
        </div>
        <div className="skill-img skill-img2">
          <img src={js} alt="" />
        </div>
        <div className="skill-img skill-img1">
          <img src={mongo} alt="" />
        </div>
        <div className="skill-img skill-img2">
          <img src={react} alt="" />
        </div>
      </div>
      

    </div> */}
  </>
  )
}

export default About