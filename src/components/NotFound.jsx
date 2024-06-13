import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='not-found-container'>
        <h1>Página no encontrada</h1>

        <Link to={"/"}>
            <div className='boton-volver'>
                <span className='texto'>INICIO</span>
            </div>
        </Link>

    </div>
  )
}
