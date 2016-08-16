import React from 'react'

let ProjectRoute = ({params, location, ...other}) => {
    let id = params.projectId

    return (
        <div>{id}</div>
    )
}

export default ProjectRoute
