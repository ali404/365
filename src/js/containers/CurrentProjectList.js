import {connect} from 'react-redux'
import ProjectList from '../components/ProjectList.react'

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

const CurrentProjectList = connect(
    mapStateToProps
)(ProjectList)

export default CurrentProjectList
