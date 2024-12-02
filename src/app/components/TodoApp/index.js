"use client"

import React, { useState } from 'react'
import styles from './TodoApp.module.css'
import { FaPlus } from "react-icons/fa";
import TaskList from '../TaskList'

// Render when there's not task on the list

const EmptyList = () => {
  return (
    <p className={styles.emptyList}>List Empty!</p>
  )
}

const TodoApp = () => {
  
  const [taskItems, settaskItems] = useState([])
  const [taskName, settaskName] = useState("")  
  const [id, setid] = useState(1)
  const [rotation, setrotation] = useState(0)


// Creates a new Task
  const addTaskBybtn = (e, isClicked = false) => {
    e.preventDefault()
    
    if(taskName.length < 1 || taskItems.length == 10) { // Max of 10 tasks
      if (e.key === "Enter" || isClicked) return
    }

    settaskItems((prev) => [...prev, {taskId: id, name: taskName }])
    setid(prev => prev + 1)
    settaskName("")
  }

  return (
    <div className={styles.TodoApp}>
        <form>
            <label>
                <input placeholder='Insert a new task' className={styles.addTask} value={taskName} onChange={(e) => settaskName(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? addTaskBybtn(e) : null} maxLength={30}/>
                <button  className={styles.addBtn}  onClick={(e) => addTaskBybtn(e,true)} type='submit'>
                  <FaPlus 
                    fill='white'
                    size={20}
                  />
                </button>
            </label>
        </form>
        {taskItems.length < 1 && <EmptyList/>}
        {taskItems.length > 0 && <TaskList taskItems = {taskItems} settaskItems = { settaskItems}/> }
        
    </div>
  )
}

export default TodoApp