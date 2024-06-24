import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { CompraFinalizada } from './CompraFinalizada'

export const CheckoutDatos = () => {
  const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)
  const {register, handleSubmit} = useForm()
  let [docId, setDocId] = useState("")

  const  comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: calcularTotal()
    }

    const pedidosRef = collection(db, "pedidos")

    addDoc(pedidosRef, pedido)
      .then((doc) => {setDocId(doc.id)})

    setTimeout(()=>handleReiniciarCarrito(), 3500)
  }
    
    if (docId) {
      return <CompraFinalizada pedidoId = {docId}/>
    }

  const handleReiniciarCarrito = () => {
    vaciarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  return (
    <div className='checkout-datos-container'>
      <h2>Datos personales</h2>
      <div className='formulario-datos'>
        <form action="" onSubmit={handleSubmit(comprar)}>
          <div className='nombre-apellido bg-container'>
            <div className="container nombre-container">
              <input className='nombre' type="text" id="nombre" name='nombre' {...register("nombre")} required/>
              <label htmlFor="nombre" className='label'>Nombre*</label>
            </div>
            <div className="container apellido-container">
              <input className="apellido" type="text" id="apellido" name='apellido' {...register("apellido")} required/>
              <label htmlFor="apellido" className='label'>Apellido*</label>
            </div>
          </div>
          <div className='container mail-container'>
            <input type="email" name="email" id="email" {...register("email")} required/>
            <label className='label' htmlFor="email">E-mail*</label>
          </div>
          <div className='documento-telefono bg-container'>
            <div className='container documento-container'>
              <input type="text" id='documento' name='documento' {...register("documento")} required/>
              <label htmlFor="documento">DNI*</label>
            </div>
            <div className='telefono-container'>
              <div className='container telefono-prefijo'>
                <input type="text" id='telefono-prefijo' name='telefono_prefijo' autoComplete="new-password" maxLength={4} {...register("telPrefijo")} required/>
                <label htmlFor="telefono-prefijo">Cod. de área (con 0)*</label>
              </div>
              <div className='container telefono-sufijo'>
                <input type="text" id='telefono-sufijo' name='telefono_sufijo' autoComplete="new-password"maxLength={7} {...register("telSufijo")} required/>
                <label htmlFor="telefono-sufijo">Número de teléfono*</label>
              </div>
            </div>
          </div>
          <div className='direccion'>
            <div className='pais-provincia bg-container'>
              <div className='pais-container container'>
                <input type="text" id='pais' name='pais' {...register("pais")} required/>
                <label htmlFor="pais">Pais*</label>
              </div>
              <div className='provincia-container container'>
                <input type="text" id='provincia' name='provincia' {...register("provincia")} required/>
                <label htmlFor="provincia">Provincia*</label>
              </div>
            </div>
            <div className='localidad-barrio bg-container'>
              <div className='localidad-container container'>
                <input type="text" id='localidad' name='localidad' {...register("localidad")} required/>
                <label htmlFor="localidad">Localidad*</label>
              </div>
              <div className='barrio-container container'>
                <input type="text" id='barrio' name='barrio' {...register("barrio")} required />
                <label htmlFor="barrio">Barrio*</label>
              </div>
            </div>
            <div className='codigo-calle bg-container'>
              <div className='codigo-container container'>
                <input type="text" id='codigo' name='codigo' {...register("codigo")} required/>
                <label htmlFor="codigo">Código postal*</label>
              </div>
              <div className='calle-container container'>
                <input type="text" id='calle' name='calle' {...register("calle")} required/>
                <label htmlFor="calle">Calle*</label>
              </div>
            </div>
            <div className='numeracion-piso-depto bg-container'>
              <div className='numeracion-container container'>
                <input type="text" id='numeracion' name='numeracion' autoComplete="new-password" {...register("numeracion")} required/>
                <label htmlFor="numeracion">Numeración*</label>
              </div>
              <div className='piso-container container'>
                <input type="number" id='piso' name='piso' maxLength={2} {...register("piso")} />
                <label htmlFor="piso">Piso</label>
              </div>
              <div className='dpto-container container'>
                <input type="text" id='dpto' name='dpto' {...register("dpto")} />
                <label htmlFor="dpto">Dpto</label>
              </div>
            </div>
          </div>
          <div className='bg-container container aclaraciones'>
            <textarea type="text" name="aclaraciones" id="aclaraciones" rows="5" autoComplete="on" {...register("aclaracion")}/>
            <label htmlFor="aclaraciones">Aclaraciones</label>
          </div>
          <div className="boton-submit">
          <button type="submit" disabled={carrito.length === 0}>Finalizar compra</button>
          </div>
        </form>
      </div>
    </div>
  )
}
