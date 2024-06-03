import React from 'react'
import { Item } from './Item'
import { Link } from 'react-router-dom'
import {Loader} from './Loader.jsx'
import { Filter } from './Filter.jsx'

export function ItemList ({productos}) {
  return (
    <>
     {
      productos ?
      <>
        <Filter/>
        <div className='item-container'>
          {productos.map((producto) => (
              <Link to={`/producto/${producto.id}`}>
                <Item key={producto.id} producto={producto}/>
              </Link>
          ))}
        </div>
      </>
      : <Loader/>
    }
    </>
  )
}