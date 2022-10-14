import React from 'react';
import profilePic from '../../assets/images/profilePic.jpg';
function About() {
  return (
    <section className="about">
      <div className="about-pic" >
        <div>
          <h2>Hi, I'm Josie.</h2>
          <h3>I'm a full-stack web engineer.</h3>
        </div>
      <img src={profilePic} style={{ width: "50%" }} alt="Josie headshot" />
      </div>
      <div>
        <p>
        I live in Austin, Texas and for the past 7 years of my career I've worked for Apple Corporate. Currently I'm on the Digital Content Management team as a Production Specialist. 
        </p>
        <p>
          I am certified in Full Stack Development using the MERN stack from the University of Texas at Austin. Please take a look around and fill out my contact form to get in touch. 
        </p>
      </div>
    </section>
  );
}

export default About;
