import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

export function Item({producto}) {

  const {agregarCarrito} = useContext(CartContext)

  return (
      <div className='card'>
        <Link to={`/producto/${producto.id}`}>
          <div className='image-container'>
            <img src={`.${producto.imagen}`} alt="" />
          </div>
        </Link>
        <div className='card-detail'>
          <Link to={`/producto/${producto.id}`}>
            <div className='nombre'>
              <h2 className='card-bodega'>{producto.bodega}</h2>
              <h3 className='card-tipo'>{producto.tipo}</h3>
            </div>
          </Link>
          <span className='card-price'>${producto.precio}</span>
          <p className='card-description'>{producto.descripcion}</p>
        </div>
        <div className='buttons'>
          <Link to={`/producto/${producto.id}`}>
            <button className='boton-ver-mas'>Ver mas</button>
          </Link>
          <button onClick={() => agregarCarrito(producto, 1)} className='boton-agregar-al-carrito'>Agregar al carrito</button>
        </div>
      </div>
    
  )
}

