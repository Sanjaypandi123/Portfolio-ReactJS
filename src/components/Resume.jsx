import React from 'react'
import Header from './Header'

import cv from '../assets/Sanjay Resume.pdf'

const Resume = () => {
  return (
    <>
      <Header />
      <div className="resume-wrapper">
        <iframe
          src={cv}
          width="600px"
          height="600px"
          title="Resume"
        ></iframe>
      </div>
    </>
  )
}

export default Resume