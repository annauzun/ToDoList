
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
    let myContainer = document.getElementById("container")
    let myInput = document.getElementById("input")
    
    let value = myInput.value
        
    if (count <= 5) {
        myContainer.innerHTML = myContainer.innerHTML + "<li>" + value + "</li>" 
    } else {
        alert("Вы ввели больше 5 дел!")
    }   
}