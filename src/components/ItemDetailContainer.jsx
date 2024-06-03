import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Loader } from './Loader'

export const ItemDetailContainer = () => {
    
    let [item, setItem] = useState()
    const id = useParams().id
    useEffect(() => {
        setTimeout(() => {
            fetch("../src/data/productos.json")
                .then(res => res.json())
                .then(data => setItem(data.find((product) => product.id == id)))
        }, 2000);
        
    }, [])

  return (
    <>
      {item ? (<ItemDetail item={item}/>) : <Loader/>}
    </>
  )
}
