import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export function ItemListContainer() {

  let { categoryId } = useParams()
  let [productos, setProductos] = useState()
  let [tipoParametro, setTipoParametro] = useState();

  let verificarId = () => {
    const categoriasRef = collection(db, "categorias")

    getDocs(categoriasRef)
      .then(res => {
        res.docs[0].data().bodega.map(i => {
          if(i.id === categoryId) {
            setTipoParametro("bodega")
          }
        })
        res.docs[0].data().blancos.map(i => {
          if(i.id === categoryId) {
            setTipoParametro("tipo")
          }
        })
        res.docs[0].data().tintos.map(i => {
          if(i.id === categoryId) {
            setTipoParametro("tipo")
          }
        })
      })
  }

  useEffect(() => {
    verificarId()

    const productosRef = collection(db, "productos")
    let data
    
    setTimeout(() => {
      getDocs(productosRef)
      .then((res) => {
        data = res.docs.map((prod) => {return{...prod.data(), id: prod.id}})
        if (!categoryId) {
          setProductos(data)
        } else{
          if(tipoParametro === "bodega") {
            setProductos(data.filter((prod) => prod.bodegaId === categoryId))
          } else if(tipoParametro === "tipo"){
            setProductos(data.filter((prod) => prod.tipoId === categoryId))
          }
        }
      })
    }, 1000)
  }, [categoryId, tipoParametro]);

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}
