import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Loader } from './Loader'

export const Filter = () => {

  let [desplegado, setDesplegado] = useState(false)
  let [categorias, setCategorias] = useState()

  useEffect(() => {
    const categoriasRef = collection(db, "categorias")
    getDocs(categoriasRef)
      .then(res => {
        setCategorias(res.docs[0].data()) 
      })
    }, [])

  
  function handleDesplegar() {
    if (!desplegado) {
      setDesplegado(true)
    }else{
      setDesplegado(false)
    }
  }
  
  function handleCambioUrl() {
    if (desplegado) {
      setDesplegado(false)
    }
  }

  return (
    <>
      {categorias ? 
        <div className='filter'>
          <div onClick={handleDesplegar} className='categorias-desplegable'>
            <h4>Categorías</h4>
            <div className='icono-flecha'>
              {!desplegado ? 
                <svg viewBox="0 0 24 24">
                  <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="currentColor" fill='#0000' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
                :
                <svg viewBox="0 0 24 24">
                  <path d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15" stroke="currentColor" fill='#0000' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
              }
            </div>
          </div>

          <div className={`contenedor-categorias ${desplegado ? "open" : ""}`}>
            <div className="bodegas">
                <h5>Bodega</h5>
                {categorias.bodega.map((cat) => { return <div key={cat.id} className='link-container'><NavLink onClick={handleCambioUrl} activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
            </div>
            <div className="tintos">
                <h5>Vinos Tintos</h5>
                {categorias.tintos.map((cat) => { return <div key={cat.id} className='link-container'><NavLink onClick={handleCambioUrl} activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
            </div>
            <div className="blancos">
                <h5>Vinos Blancos</h5>
                {categorias.blancos.map((cat) => { return <div key={cat.id} className='link-container'><NavLink onClick={handleCambioUrl} activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
            </div>
          </div>
        </div>
        :
        <Loader/>
      }
  </>
    
  )
}
