import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import './index.css'


function Advices(){
    const [advice, setAdvice] = useState('')
    const [count, setCount] = useState(0)
    async function getAdvice(){
        const res = await fetch ("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice)
        setCount((count)=> count + 1)
    }

    useEffect(function (){
        getAdvice()
    }, [])
    return (
        
        <div className="container">
            <h2>Hello World!, Get Advices🎇</h2>

            <div className="advice">
                <p>{advice}</p>
            </div>
            <button onClick={getAdvice}>Get Advice</button>
            <p className="count">You Have Read <strong>{count} Pieces of Advice</strong></p>

            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Advices />)