import React from 'react'
import alumniheadimg from '../../Alumniimages/alumniheader.jpg';
import './alumni.css'
export const Alumniheader = () => {
  return (
        <div className = "container-fluid alumni_header" >
          <img src={alumniheadimg} alt="" srcset="" />
                <h1 className="alumni_heading">Alumni</h1>
                <p className="title m-1">Home &#187; Alumni</p>
        </div >
  )
}
