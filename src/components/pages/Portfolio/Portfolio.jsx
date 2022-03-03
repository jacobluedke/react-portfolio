import React from 'react';
import './portfolio.css';
import Project from '../Project/Project';
import { projects } from '../../../data';
// import project1 from '../../img/project1-ss.png';
// import project2 from '../../img/project2-ss.png';
// import noteTaker from '../../img/note-taker-ss2.png';
// import socialNetwork from '../../img/social-network-ss.png';
// import dayPlanner from '../../img/day-planner-ss.png';
//  <div>
      
//       <section className="projects">
//           <div className="title">
//             <h2>Projects</h2>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://github.com/BennetWilson/baby-yelp">
//               <img src={project2} class="card-img-top" alt="yelp project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Baby Yelp Project</h5>
//               <p className="card-text">Application that allows the user to search for restaurants and write reviews.</p>
//               <a href="https://github.com/BennetWilson/baby-yelp" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://note-taker129.herokuapp.com/notes">
//               <img src={noteTaker} class="card-img-top" alt="note taker project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Note Taker</h5>
//               <p className="card-text">Allows the user to write, save and delete notes in an application similar to the notes app on your smartphone.</p>
//               <a href="https://note-taker129.herokuapp.com/notes" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://tgarrey37.github.io/super-team-project/">
//               <img src={project1} class="card-img-top" alt="travel planner project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Travel Planner</h5>
//               <p className="card-text">This application allows the user to search a location to find local weather, hotels, restaurants, and attractions.</p>
//               <a href="https://tgarrey37.github.io/super-team-project/" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://github.com/BennetWilson/baby-yelp">
//               <img src={dayPlanner} class="card-img-top" alt="yelp project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Day Planner</h5>
//               <p className="card-text">Allows the user to take, save, and delete notes at each hour mark during a normal 8 hour work day.</p>
//               <a href="https://github.com/BennetWilson/baby-yelp" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://note-taker129.herokuapp.com/notes">
//               <img src={socialNetwork} class="card-img-top" alt="note taker project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Social Network API</h5>
//               <p className="card-text">This application is the back-end of a social media webpage. The user can write, update and delete posts or comments in addition to being able to add or delete other users as friends.</p>
//               <a href="https://note-taker129.herokuapp.com/notes" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//           <div className="card" style={styles.card}>
//             <a href="https://tgarrey37.github.io/super-team-project/">
//               <img src={project1} class="card-img-top" alt="travel planner project screenshot"/>
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Travel Planner</h5>
//               <p className="card-text">This application allows the user to search a location to find local weather, hotels, restaurants, and attractions.</p>
//               <a href="https://tgarrey37.github.io/super-team-project/" class="btn btn-primary">View Project</a>
//             </div>
//           </div>
//       </section>
export default function Portfolio() {
  return (
   <div>
      <div className="projectList">
        <div className="projectListTexts">
          <h1 className="projectListTitle">Projects</h1>
          <p className="productListDesc">
            I have completed over 20 different applications over the past few months. Here are a few examples, click the images to visit the page or the repo button to see the gitHub repository.
          </p>
        </div>
      </div>
      <div className="projectListList">
        {projects.map((item) => (
          <Project key={item.id} imgLink={item.imgLink} img={item.img} title={item.title} text={item.text} github={item.github}/>
        ))};
        
      </div>
    </div>

  );
}
