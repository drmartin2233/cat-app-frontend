'use client';

import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [cats, setCats] = useState([]);


useEffect(() => {
  const getCats = async () => {
    const response = await fetch('https://mighty-stream-52673.herokuapp.com/cats');
    const cats =  await response.json()
    setCats(cats);
    console.log(response);
  }

  getCats();
}, [])

  return (
    <main className={styles.main}>
      <h1>Hello Cats!</h1>
      {
        cats.map(cat => (
          <h2>{ cat.name }</h2>
        ))
      }
    </main>
  )
}
