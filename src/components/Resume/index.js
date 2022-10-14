import React from 'react'
import DownloadIcon from '@mui/icons-material/Download'

const Resume = () => {

    const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'MySQL', 'GraphQL', 'React']
    
    return(
        <section className="resume">
            <div>
                <h2>Resume</h2>
                <a href="https://drive.google.com/file/d/1XAhtSH0AfW12mAzcrHqIS3SwdscQCwSS/view?usp=sharing"><DownloadIcon fontSize='large' sx={{ color: '#303b47'}} /> Download Resume</a>
                <h3>Skills</h3>
                <ul className="skills-ul">
                    {skills.map((skill) => (
                        <li className="skills-li" key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Resume