import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CheckoutDatos = () => {
  let [inputVerify, setInputVerify] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    telefono_prefijo: "",
    telefono_sufijo: "",
    pais: "",
    provincia: "",
    localidad: "",
    barrio: "",
    codigo: "",
    calle: "",
    numeracion: "",
  })

  let [verifyFlag, setVerifyFlag] = useState(true)

  const handleInputChange = (event) => {
    const {name, value} = event.target

    setInputVerify(anterior => ({...anterior, [name]: value}))
  }


  const handleVerificarInput = (event) => {
    event.preventDefault()
    let noPermitidos = [undefined, null, "", " "]

    let values = Object.values(inputVerify)

    setVerifyFlag(values.some(value => noPermitidos.includes(value)))
  }

  let {carrito, vaciarCarrito} = useContext(CartContext)

  const handleReiniciarCarrito = () => {
    vaciarCarrito()

    localStorage.setItem("carrito", JSON.stringify(carrito))
  }


  return (
    <div className='checkout-datos-container'>
      <h2>Datos personales</h2>
      <div className='formulario-datos'>
        <form action="" onChange={handleVerificarInput}>
          <div className='nombre-apellido bg-container'>
            <div className="container nombre-container">
              <input onChange={handleInputChange} className='nombre' type="text" id="nombre" name='nombre' required/>
              <label htmlFor="nombre" className='label'>Nombre*</label>
            </div>
            <div className="container apellido-container">
              <input onChange={handleInputChange} className="apellido" type="text" id="apellido" name='apellido' required/>
              <label htmlFor="apellido" className='label'>Apellido*</label>
            </div>
          </div>
          <div className='container mail-container'>
            <input onChange={handleInputChange} type="text" name="email" id="email" required/>
            <label className='label' htmlFor="email">E-mail*</label>
          </div>
          <div className='documento-telefono bg-container'>
            <div className='container documento-container'>
              <input onChange={handleInputChange} type="text" id='documento' name='documento' required/>
              <label htmlFor="documento">DNI*</label>
            </div>
            <div className='telefono-container'>
              <div className='container telefono-prefijo'>
                <input onChange={handleInputChange} type="text" id='telefono-prefijo' name='telefono_prefijo' autoComplete="new-password" required/>
                <label htmlFor="telefono-prefijo">Cod. de área (con 0)*</label>
              </div>
              <div className='container telefono-sufijo'>
                <input onChange={handleInputChange} type="text" id='telefono-sufijo' name='telefono_sufijo' autoComplete="new-password" required/>
                <label htmlFor="telefono-sufijo">Número de teléfono*</label>
              </div>
            </div>
          </div>
          <div className='direccion'>
            <div className='pais-provincia bg-container'>
              <div className='pais-container container'>
                <input onChange={handleInputChange} type="text" id='pais' name='pais' required/>
                <label htmlFor="pais">Pais*</label>
              </div>
              <div className='provincia-container container'>
                <input onChange={handleInputChange} type="text" id='provincia' name='provincia' required/>
                <label htmlFor="provincia">Provincia*</label>
              </div>
            </div>
            <div className='localidad-barrio bg-container'>
              <div className='localidad-container container'>
                <input onChange={handleInputChange} type="text" id='localidad' name='localidad' required/>
                <label htmlFor="localidad">Localidad*</label>
              </div>
              <div className='barrio-container container'>
                <input onChange={handleInputChange} type="text" id='barrio' name='barrio' required />
                <label htmlFor="barrio">Barrio*</label>
              </div>
            </div>
            <div className='codigo-calle bg-container'>
              <div className='codigo-container container'>
                <input onChange={handleInputChange} type="text" id='codigo' name='codigo' required/>
                <label htmlFor="codigo">Código postal*</label>
              </div>
              <div className='calle-container container'>
                <input onChange={handleInputChange} type="text" id='calle' name='calle' required/>
                <label htmlFor="calle">Calle*</label>
              </div>
            </div>
            <div className='numeracion-piso-depto bg-container'>
              <div className='numeracion-container container'>
                <input onChange={handleInputChange} type="text" id='numeracion' name='numeracion' autoComplete="new-password" required/>
                <label htmlFor="numeracion">Numeración*</label>
              </div>
              <div className='piso-container container'>
                <input type="text" id='piso' name='piso' />
                <label htmlFor="piso">Piso</label>
              </div>
              <div className='dpto-container container'>
                <input type="text" id='dpto' name='dpto' />
                <label htmlFor="dpto">Dpto</label>
              </div>
            </div>
          </div>
          <div className='bg-container container aclaraciones'>
            <input type="text" name="aclaraciones" id="aclaraciones" autoComplete="on"/>
            <label htmlFor="aclaraciones">Aclaraciones</label>
          </div>
          <div className="boton-submit">
              <button onClick={handleReiniciarCarrito} className={`${verifyFlag ? "no-habilitado" : ""}`} type="submit">
                <Link to={"/compra_finalizada"}>Finalizar compra</Link>
              </button>
              <button className={`${verifyFlag ? "" : "no-habilitado"}`} type="submit" disabled>Finalizar compra</button>
          </div>
        </form>
      </div>
    </div>
  )
}
