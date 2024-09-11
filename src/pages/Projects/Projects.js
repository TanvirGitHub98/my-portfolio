import React from 'react'
import './Projects.css'
import ecommerce from '../../assets/images/ecommerce2.jpg';

const Projects = () => {
  return (
    <>
        <div className=' project'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2><hr/>
        <p className='pb-3 text-center'>👉 Here are my top 3 recent project with live links and code</p>
         <div className='row' id='ads'>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>Full Stack</span>
                <img src={ecommerce}alt="Ecommerce" />
              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-details-badge'>Node</span>
                <span className='card-details-badge'>Express</span>
                <span className='card-details-badge'>Mongodb</span>
                <span className='card-details-badge'>React</span>

              </div>

              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>Techinfoyt Shopping Website</h5>
              

                </div>
                <a className='ad-btn' href='#'> View</a>

              </div>

            </div>


          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>Mobile App</span>
                <img src={ecommerce}alt="Ecommerce" />


              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-details-badge'>Node</span>
                <span className='card-details-badge'>Express</span>
                <span className='card-details-badge'>Mongodb</span>
                <span className='card-details-badge'>React</span>

              </div>

              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>Techinfoyt Shopping Website</h5>
              

                </div>
                <a className='ad-btn' href='#'> View</a>

              </div>

            </div>


          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>CCULB</span>
                <img src={ecommerce}alt="Ecommerce" />


              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-details-badge'>Node</span>
                <span className='card-details-badge'>Express</span>
                <span className='card-details-badge'>Mongodb</span>
                <span className='card-details-badge'>React</span>

              </div>

              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>Techinfoyt Shopping Website</h5>
              

                </div>
                <a className='ad-btn' href='#'> View</a>

              </div>

            </div>


          </div>

         </div>
       
  
        
       </div>
    </>

  )
}

export default Projects