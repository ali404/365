import React from 'react'
import {Link} from 'react-router'

const Project = ({id, projectName}) => (
    <div>
        <Link to={"/projects/" + id}><span>{id}</span> {projectName}</Link>
    </div>
)

export default Project
