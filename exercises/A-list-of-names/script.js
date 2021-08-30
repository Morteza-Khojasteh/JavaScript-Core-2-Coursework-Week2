function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(element => {
    const h1 = document.createElement('h1');
    h1.innerText = element.name;
    content.appendChild(h1);
    const h2 = document.createElement('h2');
    h2.innerText = element.job;
    content.appendChild(h2);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
