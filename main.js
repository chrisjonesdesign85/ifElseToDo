// global variables
// container div
let contain = document.querySelector('.container')

// plus button next to input 
let addBtn = document.querySelector('.clicker');

// input field
let inputUl = document.getElementById('taskItem')
inputUl.focus();

// completed section
let completed = document.querySelector('#completed');

// completedTask
let seeYou = document.querySelector('.completedTask');

// dynamically created new task item
let newTask = document.getElementsByClassName('tasks');

//to-do list div
let back = document.querySelector('.backdrop');

// container
let main = document.querySelector('.container')

// ul
let list = document.getElementById('list');

// the text we put in the input field
let val = taskItem.value;

//completed tasks ul
let compTasks = document.getElementById('compTasks');

//clear button
let clear = document.querySelector('.clearBtn')

// show completed btn
let showCompleted = document.querySelector('.showCompleted')

//all doneItem li's
let all = document.querySelectorAll('.doneItem')

// get the comment box (in the nav)
let commentAlt = document.getElementById('notify');
commentAlt.addEventListener('click',() => {
  console.log('he');
})

//get todos from localStorage and create them on page load.
document.addEventListener('DOMContentLoaded', getToDos)


// to-do form
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert if the input field is blank and user presses the addBtn
    if (document.getElementById('taskItem').value === "") {
        alert('Please add an item');
        return false;
    } else {
        return true;
    };

});

// Add task when Enter/Return key is pressed. 
inputUl.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
    }
});

// add a todo li item 
addBtn.addEventListener('click', () => {
    let inputList = document.getElementById('taskItem').value;
    let inputNode = document.createTextNode(inputList);
    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i><br>'
    li.style.fontSize = '19px';
    li.appendChild(inputNode);
    list.appendChild(li);
    li.appendChild(btnDelete)
    saveLocalTodos(li.textContent)
    if (inputList === "") {
        li.remove();
    } 
    
    li.addEventListener('click', () => {
        li.classList.toggle('doneItem');
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date;
        let completedTasksDiv = document.getElementById('completedTasks');
        let dDivLi = document.createElement("li");
        let dDivP = document.createElement("p");
        dDivP.innerHTML = dateTime;
        dDivLi.append(li.textContent);
        dDivLi.appendChild(dDivP);
        completedTasksDiv.appendChild(dDivLi);
        completedTasksDiv.append(dDivLi);
        console.log(dDivLi.textContent);    
        if(li.classList.contains("doneItem") == false) {
            dDivLi.classList.toggle("removeDiv")
        } 
    });       
        
    // confirm if you want a task deleted when pressing the delete icon next to a task item.
    btnDelete.addEventListener('click', (e) =>{
        e.stopPropagation()
        let result = confirm('Do you want to delete this item?');
        if(result == true){
            list.removeChild(li);
        } else {
            return true;
        }
        removeLocalTodos(todo)
    }); // end btnDelete
}); // end addBtn // I don't know if this should be all the way down here or if it should have all the other functions inside it

clear.addEventListener('click', () => {
    let message = confirm('Do you want to remove ALL completed items?')
    if (message == true) {
        let item = completedTasks.getElementsByTagName('li')
        let topItems = list.getElementsByClassName('doneItem')

        for (let i = item.length - 1; i >= 0; --i) {
            item[i].remove()
        }

        for (let i = topItems.length - 1; i >= 0; --i) {
            topItems[i].remove()
        }
        
        completed.style.display = "none"
        showCompleted.textContent = "Show Completed"
    } else {
        return true;
    }
})

// show completed button toggle this will hide/show the completed tasks
function showHideCompleted() {
        let doneDiv = document.getElementById('completed');
        let doneButton = document.querySelector('.showCompleted')
        if (doneDiv.style.display === "none") {
            doneDiv.style.display = "block";
            doneButton.textContent = "Hide Completed"
        } else {
            doneDiv.style.display = "none";
            doneButton.textContent = "Show Completed"
        }
    }

// removes previous text in input field.
let formId = document.getElementById('to-do-form');
formId.addEventListener("submit", (e) => {
    e.preventDefault();
    inputUl.value = "";
});

// storage()
function saveLocalTodos(todo) {
    // check to see if there is a localStorage
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getToDos() {
    // check to see if there is a localStorage
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.forEach(function(todo){
        let inputList = todo
        let inputNode = document.createTextNode(inputList);
        let li = document.createElement('li');
        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i><br>'
        li.style.fontSize = '19px';
        li.appendChild(inputNode);
        list.appendChild(li);
        li.appendChild(btnDelete)
        if (inputList === "") {
            li.remove();
        } 
        
        li.addEventListener('click', () => {
            li.classList.toggle('doneItem');
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date;
            let completedTasksDiv = document.getElementById('completedTasks');
            let dDivLi = document.createElement("li");
            let dDivP = document.createElement("p");
            dDivP.innerHTML = dateTime;
            dDivLi.append(li.textContent);
            dDivLi.appendChild(dDivP);
            completedTasksDiv.appendChild(dDivLi);
            completedTasksDiv.append(dDivLi);
            console.log(dDivLi.textContent);    
                
            if(li.classList.contains("doneItem") == false) {
                dDivLi.classList.toggle("removeDiv")
            } 
        });       
            
        // confirm if you want a task deleted when pressing the delete icon next to a task item.
        btnDelete.addEventListener('click', (e) =>{
            e.stopPropagation()
            let result = confirm('Do you want to delete this item?');
            if(result == true){
                list.removeChild(li);
            } else {
                return true;
            }
            removeLocalTodos(todo)
        }); // end btnDelete        
    })
}

function removeLocalTodos(todo){
      // check to see if there is a localStorage
      let todos;
      if (localStorage.getItem("todos") === null) {
          todos = []
      } else {
          todos = JSON.parse(localStorage.getItem("todos"))
      }
      const todoIndex = todos.indexOf(todo);
      todos.splice(todoIndex, 1)
      localStorage.setItem('todos', JSON.stringify(todos))
      console.log(todoIndex)
      console.log(todos)
}
