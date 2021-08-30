const blueBtn = document.querySelector('#blueBtn');
const jumbotron = document.querySelector('.jumbotron');
const donateButton =document.querySelector('.buttons .btn-primary');
const volunteerBtn = document.querySelector('.buttons .btn-secondary');
blueBtn.addEventListener('click', ()=>{
  jumbotron.style.backgroundColor = '#3498db';
  donateButton.style.backgroundColor ='#e67e22'
  volunteerBtn.style.backgroundColor = '#000';
  volunteerBtn.style.color = '#fff';
});
const orangeBtn = document.querySelector('#orangeBtn');
orangeBtn.addEventListener('click',()=>{
  jumbotron.style.backgroundColor = '#f0ad4e';
  donateButton.style.backgroundColor ='#5751fd'
  volunteerBtn.style.backgroundColor = '#31b0d5';
  volunteerBtn.style.color = '#fff';

});
const greenBtn = document.querySelector('#greenBtn');
greenBtn.addEventListener('click',()=>{
  jumbotron.style.backgroundColor = '#2ecc71';
  donateButton.style.backgroundColor ='#000'
  volunteerBtn.style.backgroundColor = '#8c9c08';
  volunteerBtn.style.color = '#fff';

});
const submitBtn = document.querySelector('form button');
const email = document.querySelector('#exampleInputEmail1');
const names = document.querySelector('#example-text-input')
const describe = document.querySelector('#exampleTextarea');
submitBtn.addEventListener('click',(e)=>{
  let allValid = [false,false,false];
  e.preventDefault();
  if(email.value.includes('@') && email.value.length >0){
    email.style.backgroundColor = 'white'
    allValid[0]=true;
  } else { 
    email.style.backgroundColor ='#EC5858';
    allValid[0]=false;
   }
  if(names.value.length ===0){
    names.style.backgroundColor = '#EC5858';
    allValid[1]=false;
  } else {
  names.style.backgroundColor = 'initial';
  allValid[1]=true;
  }
  if(describe.value.length ===0){
    describe.style.backgroundColor = '#EC5858';
    allValid[2]=false;
  } else {
  describe.style.backgroundColor = 'initial';
  allValid[2]=true;
  }
  if(!allValid.includes(false)){
    email.value ='';
    names.value = '';
    describe.value ='';
    alert('thank you!');
  }
}) 