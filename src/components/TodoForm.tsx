import React from 'react'
import '../styles/components/TodoForm.sass'

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

function TodoForm() {
      
  return (
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
  )
}

export default TodoForm