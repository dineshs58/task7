import React from 'react'
import aboutheadimg from '../../Aboutimages/img1.jpg';
import './About.css'
const Aboutheader = () => {
  return (
      <div className="container-fluid about_header">
          <img src={aboutheadimg} alt="" srcset="" />
          <h1 className="about_heading">About</h1>
          <p className="title m-1">Home &#187; About</p>
      </div>
  )
}

export default Aboutheader