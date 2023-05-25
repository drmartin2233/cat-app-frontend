'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'



export default function Cats(){
const [cats, setCats] = useState([])    
useEffect(() => {
    const getCats = async () => {
        const response = await fetch('https://mighty-stream-52673.herokuapp.com/cats')
        const retrievedCats = await response.json()
            setCats(retrievedCats)
    }
    getCats()
}, [])


return(
    <main>
        <h1>Hello React</h1>
        <h3><Link href="/">Back to Home</Link></h3>
        <br></br>
        <br></br>
        <Link href="/cats/new">Create Cat</Link>
        
        { cats.map( cat => (
            <Link href={`/cats/${cat._id}`} key={cat._id}><p>{ cat.name }</p></Link>
        ))}
    </main>
)
};
