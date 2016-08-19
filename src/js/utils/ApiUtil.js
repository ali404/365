export default class Api {
    static fetchProjects() {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            ids = JSON.parse(ids)
            let projects = {}

            if(ids) {
                ids.forEach(id => {
                    let project = localStorage.getItem(id)
                    project = JSON.parse(project)

                    projects[id] = project
                })
            }
            else {
                localStorage.setItem('ids', JSON.stringify([]))
            }

            resolve(projects)
        })
    }

    static saveProject(project) {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            ids = JSON.parse(ids)

            ids.push(project.id)

            localStorage.setItem('ids', JSON.stringify(ids))
            localStorage.setItem(project.id, JSON.stringify(project))

            resolve()
        })
    }

    static deleteProject(id) {
        return new Promise((resolve, reject) => {
            let ids = localStorage.getItem('ids')
            ids = JSON.parse(ids)

            let index = ids.indexOf(id)
            ids.splice(index, 1)

            localStorage.removeItem(id)
            localStorage.setItem('ids', JSON.stringify(ids))

            resolve()
        })
    }

    static retrieveProject(id) {
        return new Promise((resolve, reject) => {
            let project = localStorage.getItem(id)
            project = JSON.parse(project)

            resolve(project)
        })
    }

    static editProject(project) {
        return new Promise((resolve, reject) => {
            localStorage.setItem(project.id, JSON.stringify(project))
            resolve()
        })
    }
}
