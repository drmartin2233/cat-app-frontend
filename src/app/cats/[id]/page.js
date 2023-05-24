'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

export default function Cat({ params }) {

const [cat, setCat] = useState({})
const router = useRouter()


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

const removedCat = async () => {
    const response = await fetch(`https://mighty-stream-52673.herokuapp.com/cats/${ params.id }`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    const adoptedCat = await response.json()

    if (adoptedCat) {
        router.push('/cats')
    }
}


    return(
      <div>
        <h2>Here is your cat</h2>
        <h1>Name:{cat.name}</h1>
        <h1>Age:{cat.age}</h1>
        <button onClick={removedCat}>Remove Cat</button>
      </div>
    )
  }
  