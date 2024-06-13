import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

export const Carrito = () => {

  const { carrito, eliminarProductoCarrito, calcularTotal, vaciarCarrito, sumarCantidad, restarCantidad, calcularSubtotal } = useContext(CartContext)

  

  return (
    <div className='contenedor-carrito'>
      <div className="header-carrito">
          <h1>Carrito de compras</h1>
      </div>
      
      {carrito.length > 0 ? 
        <div className='contenedor-productos'>
          <div className="header-productos">
            <p>Productos</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Subtotal</p>
          </div>

          {carrito.map((producto) => 
            <div key={producto.id} className='producto'>
              <Link key={producto.id} to={`/producto/${producto.id}`}>
                <h3 key={producto.id}>{producto.bodega} {producto.tipo}</h3>
              </Link>
              <span className='precio'>${producto.precio}</span>
              <div className='contenedor-cantidad'>
                <button onClick={() => restarCantidad(producto)}>-</button>
                <span className='contador-cantidad'>{producto.cantidad}</span>
                <button onClick={() => sumarCantidad(producto)}>+</button>
              </div>
              <span className='subtotal'>${calcularSubtotal(producto)}</span>
              <div onClick={() => eliminarProductoCarrito(producto)} className='boton-eliminar'>
                <svg version="1.1" viewBox="0 0 41.336 41.336">
                  <g>
                    <path fill='currentColor' d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2
                      s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2
                      S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
                      s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
                      s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21
                      c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"/>
                  </g>
                </svg>
              </div>
            </div>)}
          
          <div className='footer-productos'>
              <div className='total'>Total: ${calcularTotal()}</div>
              <button onClick={vaciarCarrito} className="vaciar-carrito">Vaciar carrito</button>
          </div>

        </div> 
        :
        <p className='parrafo-carrito-vacio'>El carrito de compras está vacio. <br/> Puede agregar productos con el boton "Agregar al carrito".</p>
      }
    </div>
  )
}
