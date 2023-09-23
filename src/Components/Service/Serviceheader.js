import React from 'react'
import serheadimg from '../../serviceimages/img1.jpg'
import './service.css'
const Serviceheader = () => {
    return (
        
            <div className="container-fluid ser_header">
                <img src={serheadimg} alt="" srcset="" />
                <h1 className="ser_heading">Services</h1>
                <p className="title m-1">Home &#187; Services</p>
            </div>
       
    )
}

export default Serviceheader