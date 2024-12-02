import React from 'react'
import styles from './Intro.module.css'


const Intro = () => {
  return (
    <div className={styles.introTitle}>
        <h1>Welcome to My ToDo App</h1>
        <h2 className={styles.authorTitle}>Made By Ruan Mesquita</h2>
    </div>
  )
}

export default Intro