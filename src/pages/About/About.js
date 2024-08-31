import React from 'react'
import './About.css'
import formalImg from '../../assets/images/formalimg.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
               <img src={formalImg} alt=''/> 
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content'>
                <h1>About Me</h1>
                <p>Desiring an opportunity as a research assistant where I can employ my hard-work, organizational skills, attention to details, keen sight, thirst for knowledge, technological and analytical skills to support a team of researchers while broadening my knowledge with new insights, information and experiences.</p>


            </div>

        </div>

    </div>
  )
}

export default About