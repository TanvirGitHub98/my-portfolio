import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiPreact } from "react-icons/si";

const WorkExp = () => {
  return (
    <div>
      <div className="work">
        <div className="container work-exp">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2><hr/>
        <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#1e1e2c'}}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2023 - Present"
                iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                icon={<SiPreact />}
            >
                <h3 className="vertical-timeline-element-title">Lecturer</h3>
                <h4 className="vertical-timeline-element-subtitle">CSE, IUBAT</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
 
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2021 - 2022"
                iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                icon={<SiPreact />}
            >
                <h3 className="vertical-timeline-element-title">Jr. Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Dhaka, BD</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
 
            </VerticalTimelineElement>

           

         </VerticalTimeline>
        </div>

      </div>
    </div>
  )
}

export default WorkExp