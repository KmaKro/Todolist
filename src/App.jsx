import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Input from './components/input'
import Tareas from './components/tareas'
import { useState } from 'react';


function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([])

  const handleChange = (e) => {
    setTarea(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTareas([...tareas, tarea])
      setTarea('')
    }
  }

  const deleteTodo = (index) => {
    const todos = [...tareas];
    const listaNueva = todos.filter((todo, i) => i !== index)
    setTareas(listaNueva);
  }

  return (
    <>
      <h1 id="title">To-Do List</h1>
      <div className="container">
        <Input handleChange={handleChange} handleKeyDown={handleKeyDown} tarea={tarea} />
        <Tareas tareas={tareas} deleteItem={(index) => deleteTodo(index)} />
      </div>
    </>
  )
}

export default App
