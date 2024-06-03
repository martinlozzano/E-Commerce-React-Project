import React from 'react'
import { Link } from 'react-router-dom'

export function Item({producto}) {

  let ruta = "detalle/" + producto.id

  return (

    
      <div className='card'>
        <div className='image-container'>
          <img src={`.${producto.imagen}`} alt="" />
        </div>
        <div className='card-detail'>
          <div className='nombre'>
            <h2 className='card-bodega'>{producto.bodega}</h2>
            <h3 className='card-tipo'>{producto.tipo}</h3>
          </div>
            <span className='card-price'>${producto.precio}</span>
            <p className='card-description'>{producto.descripcion}</p>
        </div>
      </div>
    
  )
}

