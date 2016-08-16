import {ADD_PROJECT} from '../constants/actionTypes'

let nextProjectId = 0;

export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        id: nextProjectId++,
        projectName
    }
}

export const deleteProject = (id, projectName) => {
    return {
        type: DELETE_PROJECT,
        id: id,
        projectName
    }
}

export const editProject = (id, projectName) => {
    return {
        type: EDIT_PROJECT,
        id,
        projectName
    }
}
