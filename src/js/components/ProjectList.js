import React from 'react'

import ProjectLink from './ProjectLink'

const ProjectList = ({projects}) => {
    let projectsList = []
    for(let projectId in projects) {
        projectsList.push(
            <ProjectLink
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
