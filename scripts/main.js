// Image Changer

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/macbook.jpg') {
    myImage.setAttribute ('src','images/houston.jpg');
  } else {
    myImage.setAttribute ('src','images/macbook.jpg');
  }
}

// Welcome Message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName;
}

myButton.onclick = function() {
    setUserName();
  }

