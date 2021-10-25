// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// submit
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = '';

	e.preventDefault();
}