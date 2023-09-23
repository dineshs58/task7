import React from 'react'
import './About.css';
import ceo from '../../Aboutimages/ceo.jpg';
import sign from '../../Aboutimages/signature.png';
const Aboutceo = () => {
  return (
    <div className="container-fluid aboutceo">
        <div className="row aboutceorow">
            <div className="col-md-5 aboutceocol1">
                <img src={ceo} alt="" srcset="" />
            </div>
            <div className="col-md-7 aboutceocol2">
                  <h4>Message From CEO</h4>
                  <p>Elixir co-operates with clients in solving the hardest problems they face in their businesses—and the world. We do this by channeling the diversity of our people and their thinking.</p>
                  <img src={sign} alt="" srcset="" />
                  <h4>RENAL SCOTT</h4>
                  <p className='smallsize'>UK office</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutceo