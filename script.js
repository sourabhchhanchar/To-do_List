document.getElementById('addTaskForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const newTask = document.getElementById('newTask').value;
	if (newTask.trim() === '') {
		return;
	}
	const taskList = document.getElementById('taskList');
	const newLi = document.createElement('li');
	newLi.innerHTML = `<span>${newTask}</span> <button class="complete">Complete</button> <button class="remove">Remove</button>`;
	taskList.appendChild(newLi);
	document.getElementById('newTask').value = '';
	const completeButton = newLi.querySelector('.complete');
	completeButton.addEventListener('click', function() {
		newLi.style.textDecoration = 'line-through';
	});
	const removeButton = newLi.querySelector('.remove');
	removeButton.addEventListener('click', function() {
		taskList.removeChild(newLi);
	});
});