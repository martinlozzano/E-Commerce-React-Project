import React from 'react'
import categorias from '../data/categorias.json'
import { NavLink } from 'react-router-dom'

export const Filter = () => {

    

  return (
    <div className='filter'>
        <div className="bodegas">
            <h5>Bodega</h5>
            {categorias.bodega.map((cat) => { return <div className='link-container'><NavLink activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
        </div>
        <div className="tintos">
            <h5>Vinos Tintos</h5>
            {categorias.tintos.map((cat) => { return <div className='link-container'><NavLink activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
        </div>
        <div className="blancos">
            <h5>Vinos Blancos</h5>
            {categorias.blancos.map((cat) => { return <div className='link-container'><NavLink activeclassname="active" to={`/categorias/${cat.id}`} className='link'><p>{cat.nombre}</p></NavLink></div>})}
        </div>
    </div>
  )
}
