import React from 'react'
import './Service/service.css'
import Serviceheader from './Service/Serviceheader'
import Serviceslist from './Service/Serviceslist'
import Industries from './Service/Industries'

const Service = () => {
  return (
    <div className='mainservice'>
      <Serviceheader/>
      <Serviceslist/>
      <Industries/>
    </div>
  )
}

export default Service