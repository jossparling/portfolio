import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to="/portfoliohome">Portfolio</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav