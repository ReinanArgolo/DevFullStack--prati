class Task {
    constructor(title, date, description) {
        this.title = title;
        this.date = date;
        this.description = description;
    }

    validateData(){
        for (let i in this) {
            if(this[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

class Database {

    constructor() {
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getTasks() {
        const tasks = Array();

        const id = localStorage.getItem('id')

        for (let i = 1;i <= id; i++) {
            const task = JSON.parse(localStorage.getItem(i))

            if(task === null){
                continue
            }

            task.id = i
            tasks.push(task)
        }
        return tasks
    }

    createTask(task) {
        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id)
    }

    deleteTask(id) {
        localStorage.removeItem(id)
    }

}

const database = new Database()

function getNextId() {
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1;
}

function registerTask() {
    const title       = document.getElementById('title').value;
    const date        = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    const task = new Task(title, date, description)

    if(task.validateData()) {
       database.createTask(task)
    }
}

function loadTasks(tasks) {
    const taskst = database.getTasks();

    const listTasks = document.getElementById('listTasks')

    taskst.forEach((t) => {
        const row = listTasks.insertRow()

        row.insertCell(0).innerHTML = `${t.title}`
        row.insertCell(1).innerHTML = `${t.date}`
        row.insertCell(2).innerHTML = `${t.description}`

        const btn = document.createElement('button')
        btn.className = 'btn'
        btn.id = t.id
        btn.innerHTML = 'Concluir'
        btn.onclick = () => {
            const id = t.id
            database.deleteTask(id)

            window.location.reload()
        } 

        row.insertCell(3).append(btn)

    });

}


document.addEventListener('DOMContentLoaded', ()=>{
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
        
})
