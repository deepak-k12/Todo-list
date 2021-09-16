newTodo = document.querySelector('#newTodoInput');
btn = document.querySelector('#addTodoBtn');
ol = document.querySelector('#todoList');

function addTodo()
{
  if(newTodo.value !=='')
  {
		li = document.createElement("li");
		li.innerText = newTodo.value;
		ol.append(li);
		newTodo.value = "";
	}
}

btn.addEventListener('click',addTodo);
