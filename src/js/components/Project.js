import React from 'react'

const Project = ({id, project, onDeleteClick}) => {
    let message = ''
    if(!project) {
        message = (
            <div>Project with id: {id} does not exist</div>
        )
    }
    else {
        message = (
            <div className="project">
                <h1 className="project-title">
                    {project.projectName}
                </h1>
                <button
                    onClick={e => {
                        e.preventDefault()
                        onDeleteClick(project.id, project.projectName)
                    }}>
                    Delete
                </button>
            </div>
        )
    }

    return (
        <div>
            {message}
        </div>
    )
}

export default Project
