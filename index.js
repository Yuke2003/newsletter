const main = document.querySelector(".main");
const button = document.querySelector("button");
const success = document.querySelector(".success");
const first = document.querySelector('.first')
const email = document.getElementById('email');



button.addEventListener('click',(e)=>{
  e.preventDefault()
  validate()

})

function goToIndex() {
  window.location.href = 'index1.html';
}

function onTO(){
  window.location.href='index.html';
}

function validate(){
  let emailvalue = email.value.trim();
  if(emailvalue===''){
    seterror(email,"email is required")
    
  }
  else if(!validateEmail(emailvalue)){
    seterror(email,"enter a valid mail-id")
  }

  if(validateEmail(emailvalue)){
    goToIndex()
  }

}

function seterror(element,message){
  const box = element.parentElement;
  const errorelement = box.querySelector('.error');
  errorelement.innerText = message
  box.classList.add('error')
}


const validateEmail = (email)=>{
  return String(email)
    .toLowerCase()
    .match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
}
