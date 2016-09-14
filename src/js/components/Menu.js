import React from 'react'
import {Link} from 'react-router'

const Menu = () => (
    <div className="menu">
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/projects">Projects</Link>
        <Link className="menu-item" to="/dashboard">Dashboard</Link>
    </div>
)

export default Menu
