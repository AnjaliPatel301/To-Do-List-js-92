const inputBox=document.querySelector('.input-box');
var classList=document.querySelector('.class-list');

function add(){
    if(inputBox.value==''){
        alert('You must written something')
    }
    else{
        let li=document.createElement('li');
    li.innerText=inputBox.value;
    classList.appendChild(li);
    let span=document.createElement('span');
    li.appendChild(span);
    span.classList.add('span-append');
  }
    inputBox.value=''
    setDate()
}

classList.addEventListener('click',function(e){
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("cheked")
    setDate()

   }
   else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    setDate()

   }

},false)

function setDate(){
    localStorage.setItem("data",classList.innerHTML)
}

function task(){
    classList.innerHTML=localStorage.setItem("data")
}
task()