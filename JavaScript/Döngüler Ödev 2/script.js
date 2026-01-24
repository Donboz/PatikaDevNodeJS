
let btn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let task = document.querySelector("#task");

let storedTasks = localStorage.getItem('todoList');

if (!storedTasks) {
    let defaultTasks = [
        "3 Litre Su İç",
        "Ödevleri Yap",
        "En Az 3 Saat Kodlama Yap",
        "Yemek Yap",
        "50 Sayfa Kitap Oku"
    ];
    localStorage.setItem('todoList', JSON.stringify(defaultTasks));
    storedTasks = JSON.stringify(defaultTasks); 
}

list.innerHTML = "";

let tasksArray = JSON.parse(storedTasks);
tasksArray.forEach(item => {
    createListElement(item);
});

function newElement() {
    if (task.value.trim() === "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        
        createListElement(task.value);
        
        saveToLocalStorage(task.value);
        
        task.value = "";
    }
}

function createListElement(text) {
    let li = document.createElement("li");
    li.textContent = text;
    
    li.onclick = function() {
        this.classList.toggle("checked");
    };

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeElement; 
    
    li.append(closeButton);
    list.append(li);
}

function removeElement() {
    let li = this.parentElement;
    li.remove(); 
    
    let textToDelete = li.firstChild.textContent.trim(); 
    removeFromLocalStorage(textToDelete);
}

function saveToLocalStorage(text) {
    let tasks = JSON.parse(localStorage.getItem('todoList'));
    tasks.push(text);
    localStorage.setItem('todoList', JSON.stringify(tasks));
}

function removeFromLocalStorage(text) {
    let tasks = JSON.parse(localStorage.getItem('todoList'));
    
    let index = tasks.indexOf(text);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    
    localStorage.setItem('todoList', JSON.stringify(tasks));
}