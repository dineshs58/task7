import React from 'react'
import './contact.css'
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { FaSquareGooglePlus } from 'react-icons/fa6'
const Contactcontent = () => {
    
  return (
    <div className="container-fluid contact_cf">
        <div className="container contact_container">
            <div className="row contact_row1c1">
                <div className="col-md-3 mt-4">
                      <h2>Melbourne Office</h2>
                      <h5>121 King Street,</h5>
                      <h5>Melbourne 1200,</h5>
                      <h5>Australia</h5>
                </div>
                <div className="col-md-3 mt-4 ms-auto">
                      <h2>Sydney Office</h2>
                      <h5>62 Collins Street West,</h5>
                      <h5>Sydney 3000,</h5>
                      <h5>Australia</h5>
                </div>
                <div className="col-md-3 mt-4 ms-auto">
                    <h2>Socials</h2>
                      <h5><FaLinkedin /><FaTwitterSquare /><FaFacebookSquare /><FaSquareGooglePlus /></h5>
                </div>
            </div>
        </div>
        <div className="container form">
              <form>
                <h1>Contact us</h1>
                  <div className="mb-3">
                      <label for="name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-floating">

                      <textarea class="form-control" placeholder="Leave a comment here" id="comment" row></textarea>
                      <label for="floatingTextarea">Comments</label>
                  </div>
                  <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
              </form>
        </div>
    </div>
  )
}

export default Contactcontent