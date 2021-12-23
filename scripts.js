
function checkInputs() {
const name=document.getElementById('username');
const email=document.getElementById('email');
const subject=document.getElementById('Subject');
const textarea=document.getElementById('textarea');
const namevalue=name.value.trim();
const emailvalue=email.value.trim();
const subjectvalue=subject.value.trim();
const textareavalue=textarea.value.trim();
if (namevalue === '') {
setErrorFor(name,'Name can not be blank.')
}else if (namevalue.length < 6) {
setErrorFor(name,'Name can not be 6 character.')
}
else{
setSuccessFor(name)
}

if (emailvalue === '') {
setErrorFor(email,'Email can not be blank.')
}else if (!isEmail(emailvalue)) {
setErrorFor(email,'Email is not valid.')
}
else{
setSuccessFor(email)
}
if (subjectvalue === '') {
setErrorFor(subject,'subject can not be blank.')
}else{
setSuccessFor(subject)
}
if (textareavalue === '') {
setErrorsFor(textarea,'')
}
else{
setSuccesssFor(textarea)
}

}

function setErrorFor(input, message){
const control = input.parentElement;
const small = control.querySelector('small');
small.innerText= message;
control.className= 'field  error';

}
function setSuccessFor(input){
const control = input.parentElement;
control.className= 'field  success';
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
function setErrorsFor(input, message){
const control = input.parentElement;
const small = control.querySelector('small');
small.innerText= message;
control.className= 'textarea  error';
}
function setSuccesssFor(input){
const control = input.parentElement;
control.className= 'textarea  success';
}