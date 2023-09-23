import React from 'react'
import { Carousel, CarouselItem} from 'react-bootstrap';
import img1 from './carousel/img1.jpg';
import img2 from './carousel/img2.jpg';
import img3 from './carousel/img3.jpg';
import './slider.css'
const Slider = () => {
  return (
    <div>
          <Carousel data-bs-theme="dark">
              <CarouselItem>
                  <img
                      className="d-block w-100"
                      src={img1}
                      alt="First slide"
                  />
                  <Carousel.Caption>
                      <h1 className=''>Helping Leaders</h1>
                      <p>We look forward to help you in taking your<br/>company to new height.</p>
                      <div>
                          <button type="submit" className="btn btn-primary mt-5  cb1">ReadMore 	&gt;</button>
                          <button type="submit" className="btn btn-warning mt-5  cb2">Contact us 	&gt;</button>
                      </div>
                  </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                  <img
                      className="d-block w-100"
                      src={img2}
                      alt="Second slide"
                  />
                  <Carousel.Caption>
                      <h1 className=''>Expert Consultants</h1>
                      <p>Over 10 years of experience in helping clients<br/>finding comprehensive solutions.</p>
                      <div>
                        <button type="submit" className="btn btn-primary mt-5  cb1">ReadMore 	&gt;</button>
                      <button type="submit" className="btn btn-warning mt-5  cb2">Contact us 	&gt;</button>
                      </div>
                      
                  </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                  <img
                      className="d-block w-100"
                      src={img3}
                      alt="Third slide"
                  />
                  <Carousel.Caption>
                      <h1 className=''>Growth Partners</h1>
                      <p>
                          Connect with top consultants hand-picked by <br/>Elixir consulting and finance.
                      </p>
                      <div>
                          <button type="submit" className="btn btn-primary mt-xl-5 mt cb1">ReadMore 	&gt;</button>
                          <button type="submit" className="btn btn-warning mt-xl-5  cb2">Contact us 	&gt;</button>
                      </div>
                  </Carousel.Caption>
              </CarouselItem>
          </Carousel>
    </div>
  )
}

export default Slider