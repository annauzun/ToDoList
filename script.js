
let username = prompt("Введите свое имя:")

let myTitle = document.getElementById('title')

if(username) {
    myTitle.innerHTML = "Ваш список дел, " + username + ":"
} else {
    myTitle.innerHTML = "Ваш список дел, анонимный пользователь:"
}

let count = 0

function addTask () {
    count ++
    const myContainer = document.getElementById("container")
    const myInput = document.getElementById("input")
    const value = myInput.value

    if (count <= 5) {
        myContainer.innerHTML = myContainer.innerHTML + "<li>" + value + `<input type="checkbox" class="ckeck-box">` + `<button id="delete-task">Удалить</button>` + "</li>" 
    } else {
        alert("Вы ввели больше 5 дел!")
    }   
}


const addTaskButton = document.getElementById('button')
addTaskButton.addEventListener('click', addTask)