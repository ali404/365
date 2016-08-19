import {connect} from 'react-redux'
import ProjectList from '../components/ProjectList'

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items
    }
}

const CurrentProjectList = connect(
    mapStateToProps
)(ProjectList)

export default CurrentProjectList
