document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value)
    form.reset()
  })// your code here
});

function addToDo(todo) {
  let temp = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = '-'
  temp.textContent = `${todo}`
  temp.appendChild(btn)
  console.log(todo)
  document.querySelector('#list').appendChild(temp)
}

function handleDelete(e) {
  e.target.parentNode.remove() 
}
