import ApiUtil from './ApiUtil.js'
import {} from '../actions/index'

export const fetchProjects = () => {
    ApiUtil
        .fetchProjects()
        .then(payload => {
            console.log(payload)
        })
}

export const deleteProject = (id) => {
    ApiUtil
        .deleteProject(id)
        .then(payload => {
            console.log(payload)
        })
}

export const retrieveProject = (id) => {
    ApiUtil
        .retrieveProject(id)
        .then(payload => {
            console.log(payload)
        })
}
