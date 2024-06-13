import React from 'react'
import { Item } from './Item'
import {Loader} from './Loader.jsx'
import { Filter } from './Filter.jsx'
import { CartWidget } from './CartWidget.jsx'

export function ItemList ({productos}) {
  return (
    <>
     {
      productos ?
      <>
        <Filter/>
        <CartWidget/>
        <div className='item-container'>
          {productos.map((producto) => (<Item key={producto.id} producto={producto}/>))}
        </div>
      </>
      : <Loader/>
    }
    </>
  )
}