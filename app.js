//All of my varaibles
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

form.addEventListener('submit', (e) => {
    if (taskInput.value === '') {
        alert('Please Enter a text');
    } else {
        // Create new link element
        const link = document.createElement('a');
        // Create li element
        const li = document.createElement('li');
        // Add class
        link.className = 'delete-item secondary-content'
        li.className = 'collection-item';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value))
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li)
        // Clear input
        taskInput.value = '';
    }
    e.preventDefault();
})


taskList.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
})

clearBtn.addEventListener('click', () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
})

filter.addEventListener('keyup', (e) =>{
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach((task) => {
         const item = task.firstChild.textContent;
         if (item.toLowerCase().indexOf(text) != -1) {
             task.style.display = 'block'
         } else {
             task.style.display = 'none'
         }
     });
})
