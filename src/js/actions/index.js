import {
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_ERROR,
    FETCH_PROJECTS_SUCCESS,
    SAVE_PROJECT_REQUEST,
    SAVE_PROJECT_SUCCESS,
    SAVE_PROJECT_ERROR,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_ERROR,
    viewAction,
    serverAction
} from '../constants/actionTypes'

import {generateRandString} from '../utils/AppUtil'
import ApiUtil from '../utils/ApiUtil'

const createProject = (projectName) => {
    return {
        id: generateRandString(10),
        projectName
    }
}

export const addProject = (project) => {
    return viewAction({
        type: ADD_PROJECT,
        project,
        receivedAt: Date.now()
    })
}

export const removeProject = (id, projectName) => {
    return viewAction({
        type: DELETE_PROJECT,
        id: id,
        projectName
    })
}

export const configureProject = (id, projectName) => {
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

const receiveProjects = (projects) => {
    return serverAction({
        type: FETCH_PROJECTS_SUCCESS,
        projects
    })
}

export function fetchProjects() {
    return function(dispatch) {
        dispatch(requestProjects())

        return ApiUtil
            .fetchProjects()
            .then(payload => {
                dispatch(receiveProjects(payload))
            })
    }
}

// CONST REQUESTPROEJCTS ERROR

const requestSaveProject = () => {
    return serverAction({
        type: SAVE_PROJECT_REQUEST
    })
}

const receiveSaveProject = (project) => {
    return serverAction({
        type: SAVE_PROJECT_SUCCESS
    })
}

export function saveProject(projectName) {
    return function(dispatch) {
        let project = createProject(projectName)

        dispatch(addProject(project))
        dispatch(requestSaveProject())

        return ApiUtil
            .saveProject(project)
            .then(payload => {
                dispatch(receiveSaveProject(payload))
            })
    }
}


// CONST SAVEPROJECT ERROR

const requestDeleteProject = () => {
    return serverAction({
        type: DELETE_PROJECT_REQUEST
    })
}

const receiveDeleteProject = () => {
    return serverAction({
        type: DELETE_PROJECT_SUCCESS
    })
}

export function deleteProject(projectId) {
    return function(dispatch) {
        dispatch(removeProject(projectId))
        dispatch(requestDeleteProject(projectId))

        return ApiUtil
            .deleteProject(projectId)
            .then(payload => {
                dispatch(receiveDeleteProject(payload))
            })
    }
}

// const delete project error
