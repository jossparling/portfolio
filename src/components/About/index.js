import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="about">
      <h2>I'm Josie.</h2>
      <h3>I'm a full-stack developer.</h3>
      <img src={coverImage} className="about-pic" style={{ width: "50%" }} alt="cover" />
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
