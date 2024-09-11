import React from 'react'
import './Educations.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";


const Educations = () => {
  return (
    <div>
        <div className=" education">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2><hr/>
         <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2018 - 2022"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">BSc In CSE</h3>
                <h4 className="vertical-timeline-element-subtitle">IUBAT,Dhaka,Bangladesh</h4>
 
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2014 - 2016"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">HSC</h3>
                <h4 className="vertical-timeline-element-subtitle">Ideal College,Dhaka,Bangladesh</h4>
 
            </VerticalTimelineElement>

         </VerticalTimeline>
        </div>
    </div>
  )
}

export default Educations