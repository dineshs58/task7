import React from 'react'
import img1 from '../../serviceimages/ssimg1.jpg';
import img2 from '../../serviceimages/ssimg2.jpg';
import img3 from '../../serviceimages/ssimg3.jpg';
const Industries = () => {
  return (
    <div className="container-fluid industiescont">
      <div className="row indusrow">
        <div className="col-md-6 induscol">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 induscol incol-2">
          <h1 className='h1'>Business Consulting</h1>
          <p>As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
          <h6><a href="http://">Learn More </a></h6>
        </div>
      </div>

      <div className="row indusrow">
        <div className="col-md-6 induscol incol-2">
          <h1 className='h1'>Tax consulting</h1>
          <p>Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.</p>
          <h6><a href="http://">Learn More </a></h6>
        </div>
        <div className="col-md-6 induscol">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="row indusrow">
        <div className="col-md-6 induscol">
          <img src={img3} alt="" />
        </div>
        <div className="col-md-6 induscol incol-2">
          <h1 className='h1'>Advisory</h1>
          <p>To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.</p>
          <h6><a href="http://">Learn More </a></h6>
        </div>
      </div>
    </div>
  )
}

export default Industries