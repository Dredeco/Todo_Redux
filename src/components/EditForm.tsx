import React from 'react'
import '../styles/components/EditForm.sass'

const EditForm = () => {
  return (
    <form id="edit-form" className="hide">
        <p>Edite sua tarefa</p>
        <div className="form-control">
            <input type="text" id="edit-input" />
            <button type="submit">
            <i className="fa-solid fa-check-double"></i>
            </button>
        </div>
        <button id="cancel-edit-btn">Cancelar</button>
    </form>
  )
}

export default EditForm