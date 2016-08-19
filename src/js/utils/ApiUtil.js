export default class Api {
    static fetchProjects() {
        let ids = localStorage.getItem('ids')
        let projects = {}

        ids.forEach(id => {
            let project = localStorage.getItem(id)
            projects[id] = project
        })

        return projects
    }

    static saveProject(project) {
        let ids = localStorage.getItem('ids')
        ids.push(project.id)
        localStorage.setItem('ids', ids)
        localStorage.setItem(project.id, project);
    }

    static deleteProject(id) {
        let ids = localStorage.getItem('ids')
        let index = ids.indexOf(id)
        ids.splice(index, 1)

        localStorage.removeItem(id)
        localStorage.setItem('ids', ids)
    }

    static retrieveProject(id) {
        localStorage.getItem(id)
    }

    static editProject(project) {
        localStorage.setItem(project.id, project)
    }
}
