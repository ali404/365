export default class Api {
    static fetchProjects() {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            let projects = {}

            if(ids) {
                ids.forEach(id => {
                    let project = localStorage.getItem(id)
                    projects[id] = project
                })
            }

            resolve(projects)
        })
    }

    static saveProject(project) {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            ids.push(project.id)
            localStorage.setItem('ids', ids)
            localStorage.setItem(project.id, project)

            resolve()
        })
    }

    static deleteProject(id) {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            let index = ids.indexOf(id)
            ids.splice(index, 1)

            localStorage.removeItem(id)
            localStorage.setItem('ids', ids)

            resolve()
        })
    }

    static retrieveProject(id) {
        return new Promise((resolve, reject) => {
            let project = localStorage.getItem(id)
            resolve(project)
        })
    }

    static editProject(project) {
        return new Promise((resolve, reject) => {
            localStorage.setItem(project.id, project)
            resolve()
        })
    }
}
