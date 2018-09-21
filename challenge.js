document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler(){

let start = 0
let isPaused = false;
const timer = document.getElementById('counter')
let interval = setInterval(function () {
  start++;
  timer.innerHTML = `${start}`
}, 1000);
if (isPaused === false){
  let add = document.getElementById('+')
  add.addEventListener('click', (event) => start++)

  let sub = document.getElementById('-')
  sub.addEventListener('click', (event) => start--)
}

let pause = document.getElementById('pause')

pause.addEventListener('click', (event) => {
  if (isPaused === false){
    // event.preventDefault();
    isPaused = true
    clearInterval(interval)
    pause.textContent = "resume"
  }else{
    interval = setInterval(function () {
      start++;
      timer.innerHTML = `${start}`
    }, 1000);
    isPaused = false
    pause.textContent = "pause"
  }
})

let heart = document.getElementById("<3")
let output = document.querySelector('.likes')
let counter = {};

let heartclick = heart.addEventListener("click", (event) => {
  output.innerHTML = ""
  let key = start
  if (counter[key]){
    counter[key] += 1
  } else {
    counter[key] = 1
  }
  for (const key in counter){
  output.innerHTML += `<li>You like ${key} ${counter[key]} times</li>`
  }
})

let commentSection = document.getElementById("list")
let comment = document.getElementById("comment-form")
comment.addEventListener('submit', (event) => {
  event.preventDefault();
  input = document.getElementById("input")
  commentSection.innerHTML += `<p>${input.value}</p>`
})


})
