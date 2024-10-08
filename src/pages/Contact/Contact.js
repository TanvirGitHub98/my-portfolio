import React from 'react'
import './Contact.css'
import contactImg from '../../assets/images/contact.jpeg'
import { BsLinkedin,BsGithub,BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
        <div className=" contact">
            <div className="card card0 border-0">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                       <div className="card1">
                        <div className="row border-line">
                            <img src={contactImg} alt="contact" className='image' />
                        </div>
                       </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        
                            <div className="card2 d-flex card border-0 px-4 py-5">
                            <div className="row">
                                <div className="row">
                                     <h6>Contact With 
                                        <BsLinkedin color='blue' size={30} className='ms-2'/>
                                        <BsGithub color='black' size={30} className='ms-2'/>
                                        <BsFacebook color='blue' size={30} className='ms-2'/>

                                     </h6>
                                </div>
                               

                            <div className="row px-3 mb-4">
                                <div className="line"/>
                                <small className='or text-center'>OR</small>
                                <div className="line"/>
                            </div>
                            <div className="row px-3">
                                <input type='text' name='name' placeholder='Write Your Name' className='mb-3'/>
                                <input type='email' name='email' placeholder='Write Your Email' className='mb-3'/>
                                <textarea type='text' name='msg' placeholder='Write Your Message' className='mb-3'/>

                            </div>
                            <div className="row px-3">
                                <button type='submit' className='button'>SEND MESSAGE</button>
                            </div>
                        </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact