import React from 'react'
import Header from './Header'
import '../Csss/About.css'
import '../Csss/Contact.css'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid wrapper contact-wrapper">
        <div className="heading">
            <h1>CONTACT <p>GETIN <span>TOUCH</span></p></h1>
          </div>

          <div className="contact-content">
              <div className="left">
                <h4>Don't be shy !</h4>
                <div className="cont">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                  <div className="content">
                    <p className='badge'>ADDRESS POINT</p>
                    <h6>Samayapuram Trichy TamilNadu India 621112</h6>
                  </div>
                </div>
                <div className="cont">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <div className="content">
                    <p className='badge'>MAIL ME</p>
                    <a href="/">sanjayelanchikani@gmail.com</a>
                  </div>
                </div>
                <div className="cont">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <div className="content">
                    <p className='badge'>CALL ME</p>
                    <a href="/">+91-8220316161</a>
                  </div>
                </div>
                <div className="btns">
                              <a href="/"><p><i className="fa-brands fa-square-github"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-whatsapp"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-facebook"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-square-instagram"></i></p></a>
                              <a href="/"><p><i className="fa-brands fa-linkedin"></i></p></a>
                </div>
              </div>
              <div className="right">
                <div className="name">
                  <input type="text" placeholder='YOUR NAME' />
                  <input type="Email" placeholder='YOUR E-MAIL' />
                </div>
                <div className="contact">
                  <input type="text" placeholder='YOUR SUBJECT' />
                </div>
                <div className="contact">
                  <textarea name="" id="" cols='50' rows='5' placeholder='YOUR MESSAGE'></textarea>
                </div>
                <div className="BTN ">
                <button className='button' ><span><b>SEND MESSAGE</b></span> <p><i className="fa-solid fa-paper-plane"></i></p></button>
              </div>
              </div>
          </div>
    </div>
    </>
  )
}

export default Contact