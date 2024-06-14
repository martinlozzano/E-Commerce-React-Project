import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Loader } from './Loader'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'


export const ItemDetailContainer = () => {
    
    let [item, setItem] = useState()
    const id = useParams().id

    useEffect(() => {
      const productoRef = collection(db, "productos")

      getDocs(productoRef)
        .then(res => {
          setItem(res.docs.map((prod) => {return{...prod.data(), id: prod.id}}).find((product) => product.id == id))
        })

    }, [])

  return (
    <>
      {item ? (<ItemDetail item={item}/>) : <Loader/>}
    </>
  )
}
