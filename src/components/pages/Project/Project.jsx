import React from 'react';
import './project.css';
// import project1 from '../../../img/project1-ss.png';
// import project2 from '../../../img/project2-ss.png';
// import noteTaker from '../../../img/note-taker-ss2.png';
// import socialNetwork from '../../../img/social-network-ss.png';
// import dayPlanner from '../../../img/day-planner-ss.png';

export default function Project({img, alt, imgLink, title, text, github}) {
  return (
    <div className="projectCard">
          <div className="card" >
            <a href={imgLink} target="_blank" rel="noreferrer">
              <img src={img} className="card-img-top" alt="screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              <a href={github} target="_blank" rel="noreferrer" className="btn btn-primary">View Repo</a>
            </div>
          </div>
      </div>
  );
};
