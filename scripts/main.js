
var myHeading=document.querySelector('h1')
myHeading.innerHTML='hello world'

var log=console.log.bind(console)
log("test3")
var myImage=document.querySelector('img')
myImage.onclick=function() {
  var mySrc=myImage.getAttribute('src');
  if(mySrc=='images/firefox.jpg'){
    myImage.setAttribute('src',"images/chrome.jpg")
  }else{
    myImage.setAttribute('src',"images/firefox.jpg")

  }
}

var myButton=document.querySelector('button')
var myHeading=document.querySelector('h1')

function setUserName() {
  var myName = prompt('please enter your name.')
  localStorage.setItem('name',myName)
  myHeading.innerHTML = 'chrome is cool '+myName
}
if(!localStorage.getItem('name')){
  setUserName();
}else{
  var  a=localStorage.getItem('name');
  myHeading.innerHTML='hello,'+a;
}

myButton.onclick = function() {
  setUserName();
}
