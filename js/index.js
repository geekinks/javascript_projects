var pk = document.getElementsByTagName('p')[0];
var btn = document.getElementById('reg');

btn.addEventListener('click', function() {
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

  pk.innerHTML = conetnt[Math.floor(Math.random() * conetnt.length)];
});