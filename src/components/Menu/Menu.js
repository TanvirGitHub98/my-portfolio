import React from 'react'
import './Menu.css'
import formalImg from '../../assets/images/formalimg.jpg';
import { FcHome,FcAbout,FcPortraitMode,FcBiotech,FcReading,FcVideoProjector,FcVoicePresentation,FcBusinessContact    } from "react-icons/fc";

const Menu = ({toggle}) => {
  return (
    <div>
      {
        toggle? (
          <>
          <div className='navbar-profile-pic'>
          <img src={formalImg}alt='profile pic'/>
          
  
        </div>
         <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
             <FcHome/> Home

            </div>
            <div className='nav-link'>
             <FcAbout/> About

            </div>
            <div className='nav-link'>
             <FcPortraitMode/> Work Experience

            </div>
            <div className='nav-link'>
             <FcBiotech/> Tech Stack

            </div>
            <div className='nav-link'>
             <FcReading /> Education

            </div>
            <div className='nav-link'>
             <FcVideoProjector/> Projects

            </div>
            <div className='nav-link'>
             <FcVoicePresentation /> Testimonial

            </div>
            <div className='nav-link'>
             <FcBusinessContact /> Contact

            </div>
            

          </div>

         </div>

          </>


        ):
        (
          <>
         <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
             <FcHome title='Home'/> 

            </div>
            <div className='nav-link'>
             <FcAbout title='About'/> 

            </div>
            <div className='nav-link'>
             <FcPortraitMode title='Work Experience'/>

            </div>
            <div className='nav-link'>
             <FcBiotech title='Tech Stack'/> 

            </div>
            <div className='nav-link'>
             <FcReading title='Education' /> 

            </div>
            <div className='nav-link'>
             <FcVideoProjector title='Projects'/> 

            </div>
            <div className='nav-link'>
             <FcVoicePresentation title='Testimonial' /> 

            </div>
            <div className='nav-link'>
             <FcBusinessContact title='Contact' /> 

            </div>
            

          </div>

         </div>
          </>
        )
      }


    </div>
  )
}

export default Menu