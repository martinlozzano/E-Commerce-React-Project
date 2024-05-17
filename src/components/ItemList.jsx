import React from 'react'
import { Item } from './Item'

export function ItemList ({productos}) {
  return (
    <>
     {
      productos.length > 0 ?
      productos.map((producto) => (<Item key={producto.id} producto={producto}/>))
      : (<p>Esperando productos</p>)
    }
    </>
  )
}