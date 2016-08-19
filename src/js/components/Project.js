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
            <div>
                <div>
                    Project Name: {project.projectName}
                </div>
                <div>
                    Id: {project.id}
                </div>
                <button onClick={e => {
                    e.preventDefault()
                    onDeleteClick(project.id, project.projectName)
                }}>Delete</button>
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
