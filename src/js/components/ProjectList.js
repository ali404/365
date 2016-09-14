import React from 'react'

import ProjectLink from './ProjectLink'

const ProjectList = ({projects}) => {
    let projectsList = []
    for(let projectId in projects) {
        projectsList.push(
            <ProjectLink
                key={projectId}
                className="project-link"
                id={projects[projectId].id}
                projectName={projects[projectId].projectName}
            />
        )
    }

    return (
        <ul className="project-list">
            {projectsList}
        </ul>
    )
}

export default ProjectList
