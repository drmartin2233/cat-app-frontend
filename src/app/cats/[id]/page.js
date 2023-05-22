'use client'

import { useState, useEffect } from "react"

export default function Cat({ params }) {
const [cat, setCat] = useState({})

useEffect(() => {
    const getCat = async () => {
        const response = await fetch(
         `https://mighty-stream-52673.herokuapp.com/cats/${params.id}`   
        )
        const retrievedCat = await response.json()

        setCat(retrievedCat)
    }

    getCat()
}, [params.id])

    return(
      <div>
        <h1>{cat.name}</h1>
        <h1>{cat.age}</h1>
      </div>
    )
  }
  