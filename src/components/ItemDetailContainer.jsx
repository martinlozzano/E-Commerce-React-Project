import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Loader } from './Loader'
import dataProductos from '../data/productos.json'

export const ItemDetailContainer = () => {
    
    let [item, setItem] = useState()
    const id = useParams().id
    /* useEffect(() => {
        setTimeout(() => {
            pedirProducto("../src/data/productos.json")
                .then(data => setItem(data.find((product) => product.id == id)))
        }, 2000);
        
    }, []) */

    const pedirProducto = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataProductos);
        }, 1000);
      })
    }

    useEffect(() => {
        setTimeout(() => {
            pedirProducto()
                .then(data => setItem(data.find((product) => product.id == id)))
        }, 2000);
        
    }, [])

  return (
    <>
      {item ? (<ItemDetail item={item}/>) : <Loader/>}
    </>
  )
}
