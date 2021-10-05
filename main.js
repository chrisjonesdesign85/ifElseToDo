// global variables

// container div

let contain = document.querySelector('.container')
// plus button next to input 
let addBtn = document.querySelector('.clicker');
// input field
let inputUl = document.getElementById('taskItem');
// completedTask
let seeYou = document.querySelector('.completedTask');
// dynamically created new task item
let newTask = document.getElementsByClassName('tasks');
let back = document.querySelector('.backdrop');
let main = document.querySelector('.container')

// ul
let list = document.getElementById('list');

// the text we put in the input field
let val = taskItem.value;
// on line 67 not line 5

let done = document.querySelector('.done-two')

//clear button
let clear = document.querySelector('.clearBtn')

// show completed btn
let showCompleted = document.querySelector('.showCompleted')

//all doneItem divs
let all = document.querySelectorAll('.doneItem')

// get the comment box
let commentAlt = document.getElementById('notify');
commentAlt.addEventListener('click',()=>{
  console.log('he')
})
// add event here

// current date and time to be displayed.
let today = new Date()
let date = today.getMonth() + 1 + '-' + today.getDate() + ' ';
let time = today.getHours() + ':' + today.getMinutes();


let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (document.getElementById('taskItem').value === "") {
        alert('Please add an item');
        return false;
    } else {
        return true;
    };

});

// Add task when Enter is pressed. 
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
    // let btnDelete = document.querySelector('.king');

    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i><br>'
    
    let btnMove = document.querySelector('.remove');
    // console.log(btnMove);
    // let btnDash = document.createElement('button');
    // btnDash.className = 'fas';
    // btnDash.innerHTML = '<i class="fas fa-trash-alt"></i><br>';
    // btnDash.classList.add("delete");
    // li.appendChild(btnDash)

    li.style.fontSize = '19px';
    li.appendChild(inputNode);
    list.appendChild(li);
    li.appendChild(btnDelete)

    // list.appendChild(btnDash);

    // list.appendChild(btnDelete);
    list.classList.add('flexAno');
    // btnDelete.style.width = '90%'
    if (inputList === "") {
        li.remove();
    } else {
        console.log('hello')
    }
btnDelete.addEventListener('click', ()=>{
    let result = confirm('did you want it deleted?');
    if(result == true){
        list.removeChild(li);
        list.removeChild(btnDash);
    } else {
        return true;
    }
    // list.removeChild(li);
    // list.removeChild(btnDash);
   
});
// clear btn
clear.addEventListener('click', () => {
    let all = document.querySelectorAll('.doneItem');
    for (let i = 0; i < all.length; i++) {
        all[i].remove();
        
    };
    

});
// 
    li.addEventListener('click', () => {
        li.classList.toggle('doneItem');
        // array for completed tasks to be stored, before displaying
        let completed = [];
        let bthHash = [];
        // grab all the .doneItem class divs
        document.querySelectorAll('.doneItem').forEach(function (el) {
            // push all the li items to the completed array
            completed.push(el.textContent);
        });
        // log the completed array to the console
        console.log(completed);
    });
    
    // localStorage.setItem("todo", JSON.stringify(todoItem));
});




//button to clear all completed tasks
clear.addEventListener('click', () => {
    let list = document.getElementsByClassName('list');
    let all = document.querySelectorAll('.doneItem');
    for (let i = 0; i < all.length; i++) {
        all[i].remove();
    };
    

});




// removes previous text in input field.
let formId = document.getElementById('to-do-form');
formId.addEventListener("submit", (e) => {
    e.preventDefault();
    inputUl.value = "";
});





// Tasks we need:

// Franklyn:
// [x] addbtn - function if there is nothing in the inputField, do not add a new Li item.->DONE
// [x] styles



// Chris:
// [x] undo - click 'li' item again and remove doneItem class.
// [] show completed tasks in new div.
// [x] when user clicks enter, add new task.
// [] delete key will trigger 'clear completed tasks'



// just testing 
// function addTodo(){
// if(!todoItem){
//     return null; 

// }
// }

// todoItem.forEach( (todo)=>{
//     let deleteTodo = document.querySelector('.doneList');
//     let showCompleted = document.getElementById('showCompleted');
//     let imagine = showCompleted.getAttribute('id');
//     let items = document.createElement("p");
//     let card = document.createElement('li');
//     items.textContent = todo.text;
//     card.appendChild(items)
//     showCompleted.addEventListener('click', ()=>{
//         all.length;
//         console.log('heeloo')
//     });
// });
// function stateTodo(index, completed) {
//   const todos = JSON.parse(localStorage.getItem("todo"));
//   todos[index].isCompleted = completed;
//   localStorage.setItem("todos", JSON.stringify(todos));

let hannah = document.querySelector('.showCompleted');
hannah.addEventListener('click', () => {
    let june = document.querySelectorAll('.done-two');
    for (let i = 0; i < june.length; i++) {
        const element = june[i];
        console.log(element.value);
    }
    let liTwo = document.createElement('li');
    console.log(june);
    done.appendChild(liTwo);
});
