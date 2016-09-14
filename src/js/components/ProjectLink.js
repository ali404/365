import React from 'react'
import {Link} from 'react-router'

const Project = ({id, projectName, ...otherProps}) => (
    <div {...otherProps}>
        <Link to={"/projects/" + id}>{projectName}</Link>
    </div>
)

export default Project
