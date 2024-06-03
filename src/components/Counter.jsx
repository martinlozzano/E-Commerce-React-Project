import React from 'react'
import { useState } from 'react'

export const Counter = () => {

    let [contador, setContador] = useState(1)

    const handleSumar = () => {
        setContador((prev) => prev + 1)
    }
    const handleRestar = () => {
        contador > 1 && setContador((prev) => prev - 1)
    }

  return (
    <div className='contador'>
        <button onClick={handleRestar} className='boton-restar'>-</button>
        <span className='counter'>{contador}</span>
        <button onClick={handleSumar} className='boton-sumar'>+</button>
    </div>
  )
}
