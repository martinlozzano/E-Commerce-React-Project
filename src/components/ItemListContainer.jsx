import { useState } from 'react'
import React, { useEffect } from 'react'
import data from '../data/productos.json'
import { ItemList } from './ItemList'

export function ItemListContainer() {

  let [productos, setProductos] = useState([])

  function pedirProductos () {
    return new Promise ((resolve, reject) => {
      resolve(data)
    })
  }

  useEffect(() =>{
    pedirProductos ()
      .then ((res) => (setProductos(res)))
  })

  return (
    <div className='item-container'>
      <ItemList productos={productos}/>
    </div>
  )
}
