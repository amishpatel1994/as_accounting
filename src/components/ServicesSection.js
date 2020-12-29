import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import config from '../../config';
import { Icon } from '@iconify/react';
import baselineWork from '@iconify/icons-ic/baseline-work';
import baselineSchool from '@iconify/icons-ic/baseline-school';
import starFill from '@iconify/icons-bi/star-fill';


export default function() {
  const renderSkillBadges = (skills) => {
    return skills.map((skill) => (
      <p className="skill-badge" key={skill}>
        {skill}
      </p>
    ))
  }

  const renderTimelineElement = (service) => {
    return (
      <VerticalTimelineElement key={`${service.title}`}
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#86b2d6', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #86b2d6' }}
        iconStyle={{ background: '#86b2d6', color: '#fff' }}
        icon={service.icon}
      >
        <h3 className="vertical-timeline-element-title align-left">{service.title}</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">{service.organization} - {service.location}</h4>
        <p className="vertical-timeline-element-description">{service.description}</p>
        <div className="skills-container">{ renderSkillBadges(service.skills) }</div> */}
      </VerticalTimelineElement>
    )
  }
  return (
    <div className="container">
      <header>
        <h2>Services We Offer</h2>
      </header>

      <VerticalTimeline layout="1-column">
        {
          config.services.map((service) => (renderTimelineElement(service)))
        }
      </VerticalTimeline>
    </div>
  )}