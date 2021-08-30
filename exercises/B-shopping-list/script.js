function shoppingList(arrayOfPeople) {
  const content = document.querySelector('#content')
  const ul = document.createElement('ul');
  arrayOfPeople.forEach(element => {
    const li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
