// event elements
const taskList = document.querySelector('ul');


// click elemendi kustutamiseks
taskList.addEventListener('click', deleteTask);

function deleteTask(e) {
	if(e.target.textContent == 'X'){
		if(confirm('Are you sure to delete this task?')){
			e.target.parentElement.remove();
		}
	}
}