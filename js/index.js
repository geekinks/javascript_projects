var pk = document.getElementsByTagName('p')[2];
var btn = document.getElementById('reg');

const clickHandler = () => {
  let conetnt = [
      "Hello, World!",
      "welcome to JavaScript",
      "I am a front-end developer",
      "I love JavaScript",
      "I love coding",
      "I am a web developer",
      "I am a programmer",
      "I am a designer",
  ]
  
  let random = Math.floor(Math.random() * conetnt.length);


pk.innerHTML = conetnt[random];
};

// clickHandler();

btn.addEventListener('click', clickHandler);

let username = prompt("What is your name?");

const greeet = function(name){
  return "Hello, " + name;
}

console.log(greet(username));

// window.alert(greet(username));

setTimeout(function() {
  console.log('welcome to js world')
}, 1000)