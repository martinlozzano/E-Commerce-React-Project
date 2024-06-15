import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'

export const ItemDetail = ( {item} ) => {

  const { agregarCarrito } = useContext(CartContext) 

  let [cantidad, setCantidad] = useState(1)

  const handleSumar = () => {
      setCantidad((prev) => prev + 1)
  }
  const handleRestar = () => {
      contador > 1 && setCantidad((prev) => prev - 1)
  }

  return (
    <div className='item-detail-container'>
      <div className="grilla">
        <div className='image-container'>
          <img src={`.${item.imagen}`} alt="" />
        </div>
        <div className='item-detail'>
            <h2>{item.bodega} {item.tipo}</h2>
            <span className='valoracion'>⭐⭐⭐⭐⭐</span>
            <span className='precio'>${item.precio}</span>
            <div className="medios-de-pago">
              <img src="./img/medios de pago/tarjeta-de-credito.png" alt="" />
              <div className='texto'>
                <span className='span-1'>medios de pago</span>
                <span className='span-2'>Ver medios de pago</span>
              </div>
              <div className='tipos'>
                <img src="./img/medios de pago/visa.png" alt="" />
                <img src="./img/medios de pago/MasterCard_Logo.svg.png" alt="" />
                <img src="./img/medios de pago/pngwing.com.png" alt="" />
              </div>
            </div>
            <div className='envios'>
              <img src="./img/camion-envio.png" alt="" />
              <div className='texto'>
                <span className='span-1'>envios a todo el pais</span>
                <span className='span-2'>Calcular costo de envio</span>
              </div>
            </div>
        </div>
        <div className="agregar-carrito">
          <button onClick={() => agregarCarrito(item, cantidad)} className='boton-agregar'>AGREGAR AL CARRITO</button>
          <div className='contador'>
            <button onClick={handleRestar} className='boton-restar'>-</button>
            <span className='counter'>{cantidad}</span>
            <button onClick={handleSumar} className='boton-sumar'>+</button>
          </div>
        </div>
        <div className="descripcion">
          <p className='texto-descriptivo'>{item.descripcion}</p>
          <div className="caracteristicas">
            <p className='titulo-caracteristicas'> Caracteristicas</p>
            <div>
              <h4>Varietal</h4>
              <p>100% {item.tipo}</p>
            </div>
            <div>
              <h4>Año</h4>
              <p>{item.año}</p>
            </div>
            {item.barrica ? (<div>
              <h4>Tipo de barrica</h4>
              <p>{item.barrica}</p>
            </div>): null}
            <div>
              <h4>Cosecha</h4>
              <p>{item.cosecha}</p>
            </div>
            <div>
              <h4>Temperatura de servicio</h4>
              <p>{item.temperatura}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
