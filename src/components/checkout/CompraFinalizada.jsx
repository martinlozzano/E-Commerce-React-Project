import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../img/Logo'

export const CompraFinalizada = ({pedidoId}) => {

  return (
    <div className='compra-finalizada-container'>
      <div className="logo-container">
        <Logo/>
        <div className="texto-logo"><h1>El Rincón <br/>del Vino</h1></div>
      </div>
      <h2>Compra realizada</h2>
      <p className='seguimiento'>Podes hacer el seguimiento de tu compra con el siguiente codigo: <span>{pedidoId}</span></p>
      <p className='agradecimiento'>¡Gracias por elegirnos!</p>
      <Link className='volver-inicio' to={"/"}><p className='texto'> Volver a la tienda </p></Link>
    </div>
  )
}
