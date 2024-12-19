const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-continer");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something, BRO!!!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    savedate()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checkd");
        savedate()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedate()
    }
}, false);

function savedate(){
    localStorage.setItem("data", listContainer.innerHTML);

};

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();
