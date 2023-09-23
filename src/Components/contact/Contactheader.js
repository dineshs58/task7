import React from 'react'
import contactheadimg from '../../Alumniimages/alumniheader.jpg';
import './contact.css'
const Contactheader = () => {
  return (
      <div className="container-fluid contact_header" >
          <img src={contactheadimg} alt="" srcset="" />
          <h1 className="contact_heading">Contact</h1>
          <p className="title m-1">Home &#187; Contact</p>
      </div >
  )
}

export default Contactheader