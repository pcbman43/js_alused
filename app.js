let val;

// document.getElementById();

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

const taskTitle = document.getElementById('task-title');

// stiili muutmine

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// sisu muutmine
taskTitle.textContent = 'My Tasks';
taskTitle.innerText = 'My Favorite Tasks';
taskTitle.innerHTML = '<span style="color: red;">My Tasks</span>';

// document.querySelector();

val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h2');

document.querySelector('li').style.color = 'green';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
document.querySelector('li:last-child').style.background = '#ccc';

console.log(val);