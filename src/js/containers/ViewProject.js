import React, {Component} from 'react'
import {connect} from 'react-redux'
import Project from '../components/Project'
import {deleteProject} from '../actions/index'

function mapStateToProps(state, {id}) {
    return {
        project: state.projects.items[id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteClick: (id, projectName) => {
            dispatch(deleteProject(id, projectName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project)
