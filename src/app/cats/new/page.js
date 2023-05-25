'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'


export default function NewCatForm() {
const [newCat, setNewCat] = useState({name: "", age: 0})

const router = useRouter()

const handleChange = (evt) => {
    setNewCat({...newCat, [evt.target.id]: evt.target.value})
}


const handleSubmit = async (evt) => {
    evt.preventDefault()
    const response = await fetch('https://mighty-stream-52673.herokuapp.com/cats',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCat),
    })
    const cat = await response.json()

    if (cat) {
        router.push('/cats')
    }
}

    return(
        <div>
            <h1>New Cat Form</h1>
            <Link href="/cats">All Cats</Link>
            <form onSubmit= {handleSubmit}>
                <label for="name">Name:
                <input type="text" name="name" id="name" onChange={handleChange}/>
                </label>
                <label for="age">Age:
                <input type="number" name="age" id="age" onChange={handleChange}/>
                </label>
                <input type="submit" value="Create Cat" />
            </form>
        </div>
    )
}