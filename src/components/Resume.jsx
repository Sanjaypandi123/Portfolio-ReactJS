import React from 'react'
import Header from './Header'

import cv from '../assets/Resume E.Sanjay PandiDurai.pdf'

import { motion } from "framer-motion"

const Resume = () => {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume">
          <iframe
          src={cv}
          width="600px"
          height="600px"
          title="Resume"
        ></iframe>
        </div>
      </div>
    </>
  )
}

export default Resume