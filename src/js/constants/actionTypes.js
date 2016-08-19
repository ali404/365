// view actions
const VIEW_ACTION = 'VIEW_ACTION'
export const ADD_PROJECT = 'ADD_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const TOGGLE_DAY = 'TOGGLE_DAY'

// server actions
const SERVER_ACTION = 'SERVER_ACTION'
export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR'

export const serverAction = (action) => {
    action.source = SERVER_ACTION

    return action
}

export const viewAction = (action) => {
    action.source = VIEW_ACTION

    return action
}
