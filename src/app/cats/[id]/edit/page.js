'use client'; // allows component to impliment useEffect

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


export default function EditCat({ params }) {

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

    const handleChange = (evt) => {
        setCat({cat, [evt.target.id]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await fetch(`https://mighty-stream-52673.herokuapp.com/cats/${ params.id }`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: cat.name, age: Number(cat.age)}),
        })
        const updatedCat = await response.json()

        if (updatedCat) {
            router.push('/cats')
        }
}

    return (
        <>
            <div>
                <h1>Cat Edit Form</h1>
                <form onSubmit= {handleSubmit}>
                    <label for="name">Name:
                    <input type="text" name="name" id="name" onChange={handleChange} value={ cat.name }/>
                    </label>
                    <label for="age">Age:
                    <input type="number" name="age" id="age" onChange={handleChange} value={ cat.age }/>
                    </label>
                    <input type="submit" value="Edit Cat" />
                </form>
            </div>
        </>
    )
    }