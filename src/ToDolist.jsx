import React, { useState } from 'react'
import './assets/ToDoList.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    'Eat breakfast',
    'Take a shower',
    'Brush teeth',
  ])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks)
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="to-do-list">
            <h2 className="mb-4">TO-DO LIST</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
              /> &ensp;
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={addTask}
                >
                  Add
                </button>
              </div>
            </div>
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {task}
                  <div>
                    <button
                      className="btn btn-outline-danger mr-2"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>&nbsp;
                    <button
                      className="btn btn-outline-info mr-2"
                      onClick={() => moveTaskUp(index)}
                    >
                      Up
                    </button>&nbsp;
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => moveTaskDown(index)}
                    >
                      Down
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
