import React from 'react'
import ViewProject from '../containers/ViewProject'

let ProjectRoute = ({params, location, ...other}) => {
    let id = params.projectId

    return (
        <ViewProject id={id} />
    )
}

export default ProjectRoute
