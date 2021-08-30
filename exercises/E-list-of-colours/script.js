function listOfColours(colours) {
  const content = document.querySelector('#content');
  const select =  document.createElement('select');
  const pEls = document.createElement('p');
  content.appendChild(select);
  content.appendChild(pEls);
  pEls.style.backgroundColor = "#000000";
  colours.forEach(element=>{
    const option = document.createElement('option');
    option.value = element;
    option.innerText = element;
    select.appendChild (option);
  });
  
  pEls.innerText =`You have selected: ${select.value}.`
  pEls.style.color =select.value;
  select.addEventListener('change',()=>{
    pEls.style.color =select.value;
    pEls.innerText =`You have selected: ${select.value}.`
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
