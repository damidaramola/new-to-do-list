window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const nameInput = document.querySelector("#username");
  const form = document.querySelector("#new-form");

  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoList = {
      content: e.target.elements.content.value,
      done: false,
    };

    todos.push(todoList);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.reset();

    ShowTodos();
  });

  ShowTodos();
});

function ShowTodos() {
  const newTodos = document.querySelector("#list");
  newTodos.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("radio-button");

    content.classList.add("list-content");
    actions.classList.add("actions");
    editButton.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    newTodos.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      ShowTodos();
    });

    editButton.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        ShowTodos();
      });
    });

    deleteButton.addEventListener('click', e=> {
        todos = todos.filter( i => i != todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        ShowTodos();
    })
  });
}
