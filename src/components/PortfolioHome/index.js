import React, {useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Project from '../Project'

const PortfolioHome = () => {
    const [projects] = useState([
        {
            name: 'Syntax Poetry',
            githubUrl: 'https://github.com/jossparling/mern-full-stack',
            deployedUrl: 'https://secure-stream-79386.herokuapp.com/',
            description: 'An online community for poets to share poems and start a conversation on the meaning of the poem or what the poem means to them.',
            technologies: ['React', 'GraphQL', 'MongoDB', 'MongooseODM','JavaScript','ExpressJS','HTML', 'MaterialUI', 'CSS', 'NodeJS' ],
            imgName: 'SynaxPoetry.png'
        },
        {
            name: 'National Park & Weather App',
            githubUrl: 'https://github.com/jossparling/Project-1',
            deployedUrl: 'https://kaysie04.github.io/Project-1/',
            description: 'Quickly search for park info and weather to prepare for your next hiking trip.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'RESTful API', 'Skeleton'],
            imgName: 'NPWD.png'
        },
        {
            name: 'Work Day Scheduler',
            githubUrl: 'https://github.com/jossparling/WorkDayScheduler',
            deployedUrl: 'https://jossparling.github.io/WorkDayScheduler/',
            description: 'A front end schedule planner written that contextually highlights each hour timeblock.',
            technologies: ['HTML', 'CSS','JavaScript', 'MomentJS' ],
            imgName: 'WorkDayScheduler.png'
        }
    ])

    return (
        <section>
            <h2>Portfolio</h2>
            <Grid container spacing={2} rowSpacing={4}>
            {projects.map((project) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Project key={project.name} projectItem={project} />
                </Grid>
            )
            )}
        </Grid>
        </section>
        
    )
}

export default PortfolioHome    