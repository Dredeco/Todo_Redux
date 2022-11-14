import EditForm from './components/EditForm'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Toolbar from './components/Toolbar'

function App() {

  return (
    <div className="todo-container">
        <Header />

        <TodoForm />

        <EditForm />

        <Toolbar />
    </div>
  )
}

export default App
