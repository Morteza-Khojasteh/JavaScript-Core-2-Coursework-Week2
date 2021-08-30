function readingList(books) {
  const content = document.querySelector('#content');
  const ulEls = document.createElement('ul');
  ulEls.style.width ='350px';
  books.forEach(element => {
    const liEls = document.createElement('li');
    liEls.style.setProperty('list-style', 'none', 'important');
    const pEls = document.createElement('p');
    const imgEls = document.createElement('img');
    pEls.innerText = `${element.title} by ${element.author}`;
    if(element.alreadyRead){
      liEls.style.backgroundColor = '#74b9ff'
    } else {
      liEls.style.backgroundColor = '#ffeaa7';
    }
    if(element.title === 'The Design of Everyday Things'){
      imgEls.src = 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    } else if(element.title === 'The Most Human Human') {
      imgEls.src = 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg';
    } else if (element.title === 'The Pragmatic Programmer'){
      imgEls.src ='https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg';
    }
    imgEls.style.width ='200px'
    imgEls.style.margin ='50px'
    liEls.appendChild(pEls);
    liEls.appendChild(imgEls);
    ulEls.appendChild(liEls);
  });
  content.appendChild(ulEls);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);