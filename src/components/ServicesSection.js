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

  const renderTimelineElement = (service, idx) => {
    const color = idx % 2 == 0 ? 'rgb(193 213 158)' : 'rgb(169 204 211)'
    return (
      <VerticalTimelineElement key={`${service.title}`}
        className="vertical-timeline-element--work"
        contentStyle={{ background: color, color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid ${color}` }}
        iconStyle={{ background: color, color: '#fff' }}
        icon={service.icon}
      >
        <h3 className="vertical-timeline-element-title align-left">{service.title}</h3>
        <h4 className="vertical-timeline-element-subtitle align-left">{service.content}</h4>
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
          config.services.map((service, idx) => (renderTimelineElement(service, idx)))
        }
      </VerticalTimeline>
    </div>
  )}