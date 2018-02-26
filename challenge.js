const timer = document.getElementById('counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const like = document.getElementById('<3')
const pause = document.getElementById('pause')
const likesList = document.getElementsByClassName('likes')[0]
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')


function increment() {
  timer.innerHTML ++
}

function decrement() {
  timer.innerHTML --
}

function addLike() {
  let currentNum = timer.innerHTML
  if(document.getElementById(`${currentNum}-liked`)) {
    let li = document.getElementById(`${currentNum}-liked`)
    let likes = parseInt(li.querySelector('span').innerText)
    li.querySelector('span').innerText = ++likes
  } else {
    let item = document.createElement('li')
    item.setAttribute('id',`${currentNum}-liked`)
    likesList.appendChild(item)
    item.innerHTML = `${currentNum} has been liked <span>1</span> times`
  }
}

function pauseCounter(counter) {
  if (pause.innerText === 'pause') {
    window.clearInterval(counter)
    pause.innerText = 'resume'
  } else {
    start()
    pause.innerText = 'pause'
  }
}

function start() {
  counter = window.setInterval(increment, 1000)
}

function postComment() {
  let input = form.elements[0].value
  form.elements[0].value = ""
  let newComment = `<p>${input}</p>`
  comments.innerHTML += newComment
}



plus.addEventListener('click', function(event) {increment()})
minus.addEventListener('click', function(event) {decrement()})
like.addEventListener('click', function(event) {addLike()})
pause.addEventListener('click', function(event) {pauseCounter(counter)})
document.addEventListener('DOMContentLoaded', function(event) {start()})
form.addEventListener('submit', function(event) {postComment();event.preventDefault()})
