import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hello!</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
        I'm Josie. I live in Austin, Texas but I'm originally from Dresden, Germany. For the past 7 years of my career I've worked for Apple, currently I'm on the Digital Content Management team. I am certified in Full Stack Development using the MERN stack from UT Austin. Please take a look around and fill out my contact form. 
        </p>
      </div>
    </section>
  );
}

export default About;
