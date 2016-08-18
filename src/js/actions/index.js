import {
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
    viewAction,
    serverAction
} from '../constants/actionTypes'

import {generateRandString} from '../utils/AppUtil'

export const addProject = (projectName) => {
    return viewAction({
        type: ADD_PROJECT,
        id: generateRandString(8),
        dateCreated: Date.now(),
        projectName
    })
}

export const deleteProject = (id, projectName) => {
    return viewAction({
        type: DELETE_PROJECT,
        id: id,
        projectName
    })
}

export const editProject = (id, projectName) => {
    return viewAction({
        type: EDIT_PROJECT,
        id,
        projectName
    })
}
