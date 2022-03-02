import React from 'react';
import thanksgiving from '../../img/thanksgiving.JPG'

export default function About() {
  const styles = {
    header: {
      color: 'purple',
    },
    cont: {
      height: '100vh',
      display: 'flex-wrap',
      alignItems: 'center',
    },
    left: {
      width: '60%',
      backgroundColor: 'red',
      flexWrap: 'wrap',
    },
    imgcard: {
      marginTop: '0px',
      width: '60%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: '50%',
      width: 'auto',
      borderRadius: '30px',
      boxShadow: '-50px -50px #353839',
      objectFit: 'cover',
      position: 'relative',
    },
    right: {
      flex: '1',
      width: '40%',
      flexWrap: 'wrap',
    },
  };

  return (
    <div>
      <div className='aboutHeader'>
        <h1 style={styles.header}>About Me</h1>
      </div>
      <div styles={styles.cont} className='aboutContainer'>
        <div style={styles.imgcard} className='aboutImage'>
          <img style={styles.image} alt='photo' src={thanksgiving}></img>
        </div>
        <div styles={styles.right} className='aboutInfo'>
          <h2 style={styles.title}>Jacob Luedke</h2>
          <p style={styles.p}>
            My name is Jacob, and I live in Glendale, Arizona. I am originally from central Wisconsin and I have been here for about 5 years.
            I am currently taking a coding bootcamp through the University of Arizona. I am looking forward to the opportunities that the bootcamp
            will bring. I love learning new things and with this career the learning never stops.
          </p>
          <div>
            <h3>Links</h3>
            <div>
             <a target='_blank' href="https://www.linkedin.com/in/jacob-luedke-315244221/"><i className="fa-brands fa-linkedin"></i></a>

            <a target="_blank" href="https://github.com/jacobluedke"><i className="fa-brands fa-github-square"></i></a> 
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
