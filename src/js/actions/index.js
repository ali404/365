import {ADD_PROJECT} from '../constants/actionTypes'

let nextProjectId = 0;

export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        id: nextProjectId++,
        projectName
    }
}
