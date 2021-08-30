function todoList(todos) {
  const content = document.querySelector('content');
  const ulEls = document.createElement('ul');
  document.body.appendChild(ulEls);
  todos.forEach(element =>{
    const liEls = document.createElement('li');
    liEls.innerText = element.todo;
    ulEls.appendChild(liEls);
    liEls.style.textDecoration ='none';
    liEls.addEventListener('click', ()=> {
      if(liEls.style.textDecoration === 'none'){
        liEls.style.textDecoration = 'line-through';
      } else {
        liEls.style.textDecoration = 'none';
      } 
    });
  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);