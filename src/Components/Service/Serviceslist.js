import React from 'react'
import './service.css'
import img2 from '../../serviceimages/simg1.jpg';

import { AiFillMessage } from 'react-icons/ai';
import { MdColorLens } from 'react-icons/md';
import { BsFillAlarmFill } from 'react-icons/bs';
const Serviceslist = () => {
  return (
    <div className="container-fluid servicelist">
      <div className="row servicelistrow">
        <div className="col-md-6 sercicelistcol">
          <img src={img2} alt="" srcset="" className='img2'/>
        </div>
        <div className="col-md-6 sercicelistcol">
          <div className="row servicelistcolrow">
            <div className="col-12 ">
              <h2><span><AiFillMessage/></span>We Are Professional</h2>
              <p className='mt-3'>We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.</p> 

            </div>
            <div className="col-12 mt-5">
              <h2><span><MdColorLens /></span>We Are Creative</h2>
              <p className='mt-3'> With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?</p>
            </div>
            <div className="col-12 mt-5">
              <h2><span><BsFillAlarmFill /></span>24/7 Great Support</h2>
              <p className='mt-3'>Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.</p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serviceslist