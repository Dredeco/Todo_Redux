import React from 'react'
import '../styles/components/TodoForm.sass'
import '../styles/components/TodoList.sass'

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const saveTodo = (text, done = 0, save = 1) => {
  const todo = document.createElement("div");
  todo.classList.add("todo"); 

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  };

function TodoForm() {

  todoForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput?.value;

    if(inputValue) {
      saveTodo(inputValue)
    }
  })
      
  return (
  <div>
      <form id="todo-form">
      <p>Adicione sua tarefa</p>
      <div className="form-control">
        <input
            type="text"
            id="todo-input"
            placeholder="O que você vai fazer?"
        />
        <button type="submit">
            <i className="fa-thin fa-plus"></i>
        </button>
      </div>
      </form>

      <div id="todo-list">
        <div className="todo">

        </div>
      </div>
    </div>
  )
}

export default TodoForm

function saveTodoLocalStorage(arg0: { text: any; done: number; }) {
  throw new Error('Function not implemented.');
}
