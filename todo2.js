const todo = document.getElementById("todo");
const done = document.getElementById("done");


const form = document.getElementById("form");
form.addEventListener("submit", function(event){
	event.preventDefault();
	const textarea = document.getElementById("textarea");
	const task_text = textarea.value;
	let li_node = document.createElement("li");
	let text_node = document.createTextNode(task_text);
	li_node.appendChild(text_node);
	todo.appendChild(li_node).classList.add("item_todo");


});


