// global variables

// container div
let contain = document.querySelector('.container')

// plus button next to input 
let addBtn = document.querySelector('.clicker');

// input field
let inputUl = document.getElementById('taskItem')
inputUl.focus();

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
commentAlt.addEventListener('click',()=>{
  console.log('he');
})


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

    // not sure what this is exactly lol
    // list.classList.add('flexAno');
    if (inputList === "") {
        li.remove();
    } else {
        // console.log('hello')
    }
    
    // toggle the doneItem class to done items. giving it the strike-through and grey color signifying a done item.
    li.addEventListener('click', () => {
        li.classList.toggle('doneItem');
        
        //array completed tasks to be stored, before displaying
        let completed = []; // create a new empty array to store the done items
        let compTasks =  document.getElementById('compTasks');   

        // grab all the .doneItem class divs and push them to the complted array
        document.querySelectorAll('.doneItem').forEach(function (el) {
            // push all the li items to the completed array
            completed.push(el.textContent);
                // get the time and date (chris)
        });
        
        
        
        
        compTasks.innerHTML = completed.map(i => `<li>${i}</li>`).join('') // we were adding the date/time inside the li here but this is where it will update all the time/dates every time anew task is completed.
            // here I was trying to add a new class name to the li items in the 'completed tasks' div to be able to add the date/time
        
        let newLi = document.querySelectorAll("#compTasks > li");
            newLi.forEach(x => {                                                            
                x.classList.add('new')
                
            }); 
         
        }); 

        li.addEventListener('click', () => {
            const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date;
        let completedTasksDiv = document.getElementById('completedTasks')
        let elem = document.createElement('p')
        let dDiv = document.createElement("div")
        let dDivLi = document.createElement("li")
        let dDivP = document.createElement("p")
        dDivP.textContent = dateTime
        dDivLi.append(li.textContent)
        dDiv.appendChild(dDivLi)
        dDiv.appendChild(dDivP)
        console.log(dDiv)
        completedTasksDiv.append(dDiv)
        console.log(dDivLi.textContent)
        
        })
        
    // confirm if you want a task deleted when pressing the delete icon next to a task item.
    btnDelete.addEventListener('click', ()=>{
        let result = confirm('did you want it deleted?');
        if(result == true){
            list.removeChild(li);
        
        } else {
            return true;
        }
    }); // end btnDelete
}); // end addBtn // I don't know if this should be all the way down here or if it should have all the other functions inside it


// show completed button toggle this will hide/show the completed tasks
function showHideCompleted() {
        let doneDiv = document.getElementById('completedTasks');
        if (doneDiv.style.display === "none") {
            doneDiv.style.display = "block";
        } else {
            doneDiv.style.display = "none";
        }
    }


// removes previous text in input field.
let formId = document.getElementById('to-do-form');
formId.addEventListener("submit", (e) => {
    e.preventDefault();
    inputUl.value = "";
});


