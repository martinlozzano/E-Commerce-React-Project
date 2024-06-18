import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const MinimalCart = () => {
  let {carrito, calcularCantidadCarrito, calcularTotal} = useContext(CartContext)

  const carritoReducido = carrito.slice(0, 3)

  return (
    <div className='minimal-cart'>
      <h2 className='header-minimal-cart'>Tu compra</h2>
      <span className='cantidad-productos'>{calcularCantidadCarrito()} productos</span>
      <div className="productos-container">
        {
          carritoReducido.map((prod) => {
            return(
              <div key={prod.id} className="producto">
                <Link className='producto-nombre' to={`/producto/${prod.id}`}>{prod.bodega} {prod.tipo}</Link>
                <span className='producto-cantidad'>x{prod.cantidad}</span>
              </div>
            )
          })
        }
      </div>
      <div className="link-container">
        <Link className='link-carrito' to={"/carrito"}>ver todos</Link>
      </div>
      <div className="total">
        <h3 className='total-titulo'>Total:</h3>
        <span className='total-numero'>${calcularTotal()}</span>
      </div>
    </div>
  )
}
