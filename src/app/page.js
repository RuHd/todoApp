"use client"

import styles from "./page.module.css";
import TodoApp from "./components/TodoApp";
import './globals.css'
import { useEffect, useState } from "react";
import Intro from "./components/Intro";

export default function Home() {
  const [introShown, setintroShown] = useState(false)
  
  useEffect(() => {
    const showMain = () => {
      setintroShown(true)
    }
    
    setTimeout(showMain, 4000)
    return () => {
      clearTimeout(showMain)
    }
  }, [])
  
  return (
    <main className={styles.page}>
      {!introShown ? <Intro/> : <TodoApp/>}
        {/* <TodoApp/> */}
    </main>
  );
}
