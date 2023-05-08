window.addEventListener('load', ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#username');
    const  form = document.querySelector('#list');

    const username = localStorage.getItem('username') || '';
    
    nameInput.value =username;

    nameInput.addEventListener('change',e =>{
        localStorage.setItem('username',e.target.value);

    });

    form.addEventListener('submit',e => {
    e.preventDefault(); 
    const todoList ={
      content:e.target.elements.content.value,
      done:false
    }

    todos.push(todoList);
    localStorage.setItem('todos',JSON.stringify(todos));
    e.target.reset();

    ShowTodos();
});
  
ShowTodos();  

});

function ShowTodos(){
    const newTodos = documenr.querySelector('#list');
    newTodos.innerHTML ='';

    todos.forEach(todo => {
        const todoItem = document.createElement('div')
        todoItem.classList.add('todo-item')

        const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const editButton = document.createElement('button');
		const deleteButton = document.createElement('button');

        
		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('radio-button');
    })
}