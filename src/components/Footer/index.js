import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Footer = () => {
    // Style for the footer
    const footerStyle = {
        backgroundColor: 'white'

    }

    return(
        <footer style={footerStyle}>
            <div>
                <div className="icons">
                    <a href="http://www.github.com/jossparling" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                    <a href="http://www.linkedin.com/in/josiesparling" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                    <a href="mailto:jossparling@gmail.com"><AlternateEmailIcon fontSize='large' /></a>
                </div>
            <p>&copy; Josie Sparling</p>
            </div>
            
        </footer>

    )
}

export default Footer