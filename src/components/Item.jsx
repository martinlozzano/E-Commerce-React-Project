import React from 'react'

export function Item({producto}) {
  return (
    <div className='card'>
        <img src={producto.imagen} alt="" />
        <div className='card-detail'>
            <h2 className='card-title'>{producto.nombre}</h2>
            <span className='card-price'>${producto.precio}</span>
            <p className='card-description'>{producto.descripcion}</p>
        </div>
        <button>Agregar al carrito</button>
    </div>
  )
}

