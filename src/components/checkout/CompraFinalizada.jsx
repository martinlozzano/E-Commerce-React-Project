import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../img/Logo'


export const CompraFinalizada = () => {
  

  

  return (
    <div className='compra-finalizada-container'>
      <div className="logo-container">
        <Logo/>
        <div className="texto-logo"><h1>El Rincón <br/>del Vino</h1></div>
      </div>
      <h2>Compra realizada</h2>
      <p>¡Gracias por elegirnos!</p>
      <Link className='volver-inicio' to={"/"}><p className='texto'> Volver a la tienda </p></Link>
    </div>
  )
}
