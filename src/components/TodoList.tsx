import React from 'react'
import '../styles/components/TodoList.sass'
import TodoForm, {saveTodo} from './TodoForm'

const todoList = document.querySelector("#todo-list");

const TodoList = () => {

  return (
    <div id="todo-list">
        <div className="todo">
            <h3>Estou fazendo algo aqui...</h3>
            <button className="finish-todo">
                <i className="fa-solid fa-check"></i>
            </button>
            <button className="edit-todo">
                <i className="fa-solid fa-pen"></i>
            </button>
            <button className="remove-todo">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
  )
}

export default TodoList