function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML='';
  todos.forEach((element,index) => {
    const liEls = document.createElement('li');
    const i1  = document.createElement('i');
    const i2 = document.createElement('i');
    const span = document.createElement('span');
   liEls.className =('list-group-item d-flex justify-content-between align-items-center');
   liEls.innerText=element.task;
   if(element.completed){
     liEls.style.textDecoration='line-through';
   }
   span.classList.add('badge', 'bg-primary', 'rounded-pill');
   i1.classList.add('fa', 'fa-check');
   i2.classList.add('fa', 'fa-trash');
   span.appendChild(i1);
   span.appendChild(i2);
   liEls.appendChild(span);
   list.appendChild(liEls);
   i1.addEventListener('click',()=>{
     element.completed =(!element.completed);
     populateTodoList(todos);
   })
   i2.addEventListener('click',()=>{
     todos.splice(index,1);
     populateTodoList(todos)
   })
 });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const input = document.querySelector('#todoInput')
  todos.push({task:[input.value],completed: false})
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
