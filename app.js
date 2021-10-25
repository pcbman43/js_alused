// event elements
const taskList = document.querySelector('ul');
const dedAllBtn = document.querySelector('#del-tasks');


// click elemendi kustutamiseks
taskList.addEventListener('click', deleteTask);

dedAllBtn.addEventListener('click', deleteTasks);

function deleteTask(e) {
	if(e.target.textContent == 'X'){
		if(confirm('Are you sure to delete this task?')){
			e.target.parentElement.remove();
		}
	}
}

function deleteTasks(e){
	// taskList.innerHTML = '';
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	} 
}