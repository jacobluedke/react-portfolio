import React from 'react';
import project1 from '../../img/project1-ss.png';
import project2 from '../../img/project2-ss.png';
import noteTaker from '../../img/note-taker-ss2.png';

export default function Portfolio() {
  const styles = {
    card: {
      width: '18rem',
    }
  }
  return (
    <div>
      
      <section className="projects">
          <div className="title">
            <h2>Projects</h2>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://github.com/BennetWilson/baby-yelp">
              <img src={project2} class="card-img-top" alt="yelp project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Baby Yelp Project</h5>
              <p className="card-text">Application that allows the user to search for restaurants and write reviews.</p>
              <a href="https://github.com/BennetWilson/baby-yelp" class="btn btn-primary">View Project</a>
            </div>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://note-taker129.herokuapp.com/notes">
              <img src={noteTaker} class="card-img-top" alt="note taker project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">Allows the user to take, save, and delete notes at each hour mark during a normal 8 hour work day.</p>
              <a href="https://note-taker129.herokuapp.com/notes" class="btn btn-primary">View Project</a>
            </div>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://tgarrey37.github.io/super-team-project/">
              <img src={project1} class="card-img-top" alt="travel planner project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Travel Planner</h5>
              <p className="card-text">This application allows the user to search a location to find local weather, hotels, restaurants, and attractions.</p>
              <a href="https://tgarrey37.github.io/super-team-project/" class="btn btn-primary">View Project</a>
            </div>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://github.com/BennetWilson/baby-yelp">
              <img src={project2} class="card-img-top" alt="yelp project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Baby Yelp Project</h5>
              <p className="card-text">Application that allows the user to search for restaurants and write reviews.</p>
              <a href="https://github.com/BennetWilson/baby-yelp" class="btn btn-primary">View Project</a>
            </div>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://note-taker129.herokuapp.com/notes">
              <img src={noteTaker} class="card-img-top" alt="note taker project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">Allows the user to take, save, and delete notes at each hour mark during a normal 8 hour work day.</p>
              <a href="https://note-taker129.herokuapp.com/notes" class="btn btn-primary">View Project</a>
            </div>
          </div>
          <div className="card" style={styles.card}>
            <a href="https://tgarrey37.github.io/super-team-project/">
              <img src={project1} class="card-img-top" alt="travel planner project screenshot"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">Travel Planner</h5>
              <p className="card-text">This application allows the user to search a location to find local weather, hotels, restaurants, and attractions.</p>
              <a href="https://tgarrey37.github.io/super-team-project/" class="btn btn-primary">View Project</a>
            </div>
          </div>
      </section>
    </div>
  );
}
