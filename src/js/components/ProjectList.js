import React from 'react'

import Project from './Project'

const ProjectList = ({projects}) => {
    let projectsList = []
    for(let projectId in projects) {
        projectsList.push(
            <Project
                key={projectId}
                {...projects[projectId]}
            />
        )
    }

    return (
        <ul>
            {projectsList}
        </ul>
    )
}

export default ProjectList
