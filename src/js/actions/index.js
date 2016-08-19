import {
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_ERROR,
    FETCH_PROJECTS_SUCCESS,
    viewAction,
    serverAction
} from '../constants/actionTypes'

import {generateRandString} from '../utils/AppUtil'
import ApiUtil from '../utils/ApiUtil'

export const addProject = (projectName) => {
    return viewAction({
        type: ADD_PROJECT,
        id: generateRandString(8),
        receivedAt: Date.now(),
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
        projectName,
        receivedAt: Date.now()
    })
}

const requestProjects = () => {
    return serverAction({
        type: FETCH_PROJECTS_REQUEST
    })
}

const receiveProjects = (payload) => {
    return serverAction({
        type: FETCH_PROJECTS_SUCCESS,
        projects: payload
    })
}

export function fetchProjects() {
    return function(dispatch) {
        dispatch(requestProjects())

        return ApiUtil
            .fetchProjects()
            .then(payload => {
                console.log(payload)
                dispatch(receiveProjects(payload))
            })
    }
}

// CONST REQUESTPROEJCTS ERROR
