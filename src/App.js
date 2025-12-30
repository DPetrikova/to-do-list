import './App.css';
import { useState, useEffect } from 'react';
import Task from './components/Task'

const API = "http://localhost:3001/tasks"

function App() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [finishedTasks, setFinishedTasks] = useState([])

    useEffect(() => {
      fetch(API)
        .then(res => res.json())
        .then(setTasks)
    }, [])
    
    function addNewTask(e) {
      e.preventDefault()
      if (newTask !== '') {
        setTasks(tasks => [...tasks, newTask])
        
        setNewTask('')
      }
    }

    function handleChange(value) {
        setNewTask(value)
    }

    function taskDone(id) {
      setFinishedTasks(finishedTasks => [...finishedTasks, tasks.filter((_,i) => i == id)])
      setTasks(tasks => tasks.filter((_,i) => i !== id))
    }

  return (
    <div className="App">
      <header className="App-header">
        TO-DO LIST
      </header>
      <ol>
        {tasks.map((task,i) => (
          <Task task={task.task} key={i} handleClick={() =>taskDone(i)}/>
          ))}
      </ol>
      <form>
        <label>New Task: </label>
        <input type='text' value={newTask}  onChange={(e) => handleChange(e.target.value)}/>
        <button onClick={addNewTask}>Add</button>
      </form>  
      <p>Finished Tasks</p>
      <ol>
        {finishedTasks.map(task => 
          <Task  task={task} finished={true}/>
        )}
      </ol>
    </div>
  );
}

export default App;