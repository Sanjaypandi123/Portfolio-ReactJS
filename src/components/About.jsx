import React from 'react'
import Header from './Header'
import '../Csss/About.css'
import cv from '../assets/Sanjay Resume.pdf'

const About = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid wrapper py-5">
          <div className="img">

          </div>
          <div className="crossbox">

          </div>

          <div className="heading">
            <h1>RESUME <p>ABOUT <span>ME</span></p></h1>
            
          </div>

          <div className="about-wrapper mt-5">
            <div className="img1 d-lg-none mb-5">

            </div>
          
            <h1>PERSONAL INFOS</h1>
              <div className="row py-4">
                <div className="col-lg-12 ">
                  <h4>Name : <span>Sanjay PandiDurai</span></h4>
                  <h4>Phone : <span>+91-8220316161</span></h4>
                  <h4>Age : <span>20</span></h4>
                  <h4>Nationality : <span>INDIAN</span></h4>
                  <h4>Address : <span>Trichy </span></h4>
                </div>
              </div>
              {/* <h1>Hobbies</h1>
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
              </div> */}
              <div className="BTN pt-3">
                <a href={cv} download className='button'><span><b>DOWNLOAD CV</b></span> <p><i className="fa-solid fa-download"></i></p></a>
              </div>
          </div>
      </div>
      <div className="container-fluid wrapper py-5 d-flex align-items-center justify-content-center ">
             <div className="row">
                  <div className="col-lg-12">
                     <div className="timeline-item">
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

<div className="timeline-item">
<div className="icon"><i className="fa-solid fa-briefcase"></i></div>
<span className="badge mb-2">2022–2025 </span>
<h5 className=''>BACHELOR DEGREE  <span className="">– Bharathidasan University</span></h5>
<p>SRM TRICHY ARTS AND SCIENCE COLLEGE, Irungalur.</p>
<p>60%.</p>
</div>

</div> 
</div>
      </div>
    </>
  )
}

export default About