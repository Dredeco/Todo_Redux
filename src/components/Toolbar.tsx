import React from 'react'
import '../styles/components/Toolbar.sass'

const Toolbar = () => {
  return (
    <div id="toolbar">

    <div id="search">
      <h4>Pesquisar:</h4>
      <form>
        <input type="text" id="search-input" placeholder="Buscar..." />
        <button id="erase-button">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </form>
    </div>

    <div id="filter">
      <h4>Filtrar:</h4>
      <select id="filter-select">
        <option value="all">Todos</option>
        <option value="done">Feitos</option>
        <option value="todo">A fazer</option>
      </select>
    </div>

  </div>
  )
}

export default Toolbar