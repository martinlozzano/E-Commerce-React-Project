import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import categorias from '../data/categorias.json'
import dataProductos from '../data/productos.json'

export function ItemListContainer() {

  let { categoryId } = useParams()
  let [productos, setProductos] = useState()
  let [tipoParametro, setTipoParametro] = useState();

  let verificarId = () => {
    for (let i of categorias.bodega) {
      if(i.id === categoryId) {
        setTipoParametro("bodega")
      }
    }
    for (let i of categorias.blancos) {
      if(i.id === categoryId) {
        setTipoParametro("tipo")
      }
    }
    for (let i of categorias.tintos) {
      if(i.id === categoryId) {
        setTipoParametro("tipo")
      }
    }
  }

  /* const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataProductos);
      }, 1000);
    })
  }

  useEffect(() => {
    verificarId()
    pedirProductos()
    .then(res => {
      if (!categoryId) {
        setProductos(res)
        
      } else{
        if(tipoParametro === "bodega") {
          setProductos(res.filter((prod) => prod.bodegaId === categoryId))
          

        } else if(tipoParametro === "tipo"){
          setProductos(res.filter((prod) => prod.tipoId === categoryId))
        }
      }
      
    })
      
  }, [categoryId, tipoParametro]); */

  useEffect(() =>{
    verificarId()

      setTimeout(() => {
        fetch("../src/data/productos.json")
          .then(res => res.json())
          .then(data => {
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

      }, 2000);
  }, [categoryId, tipoParametro])

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}
