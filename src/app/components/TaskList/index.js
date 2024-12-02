import React, { useEffect, useState } from 'react'
import styles from './TaskList.module.css'
import {FaCheck} from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";


const Task = ({taskName , id, settaskItems}) => {

  const [taskClicked, settaskClicked] = useState(false)
  const [taskTitle, settaskTitle] = useState(taskName)
  
  // const changeInput = (e) => {
  //   if(e.key === "Enter") {
  //     settaskTitle(e.target.value.length < 1 ? taskName : e.target.value)   
  //   }

  // }
  
  return (
          <li className={`${styles.taskItem} ${ styles.taskAppears}` } >
                <button className={`${styles.doneBtn} ${taskClicked ? styles.checkedBtn : ""}`} onClick={() => settaskClicked(!taskClicked)}>
                  {taskClicked && <FaCheck size={30} style={{zIndex: "5"}} fill='white'/>}
                </button>
                <input className={`${styles.taskTitle} ${taskClicked ? styles.taskClicked : ""}`} value={taskTitle} readOnly/>
                <section className={styles.btnGroup}>
                  <button className={styles.btnRemove} onClick={() => settaskItems(prev => prev.filter(task => task.taskId !== id))}>
                    <IoIosClose size={30} />
                  </button>
                  {/* <button>subTask</button> */}
                </section>
              
            </li> 
  )
}

const TaskList = ({taskItems, settaskItems}) => { 
  return (
    <div className={styles.taskList}>
        <ul>
          {taskItems.map(task => {

            return (
              <Task key={task.taskId} id={task.taskId} settaskItems = {settaskItems} taskName = {task.name}/>
            )
          })}
        </ul>
    </div>
  )
}

export default TaskList