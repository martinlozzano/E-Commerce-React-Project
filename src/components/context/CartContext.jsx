import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    let [carrito, setCarrito] = useState([])

    const agregarCarrito = (item, cantidad) => {

        let itemIndex = carrito.findIndex(prod => prod.id === item.id) 

        if (itemIndex === (-1)){
            let producto = {...item, cantidad:cantidad}
            setCarrito ([...carrito, producto])
        } else{
            carrito[itemIndex].cantidad = carrito[itemIndex].cantidad + cantidad
            setCarrito([...carrito])
        } 
    }

    const sumarCantidad = (item) => {
        item.cantidad ++
        setCarrito([...carrito])
    }

    const restarCantidad = (item) => {
        item.cantidad > 1 && item.cantidad --
        setCarrito([...carrito])
    }

    const calcularCantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const calcularTotal = () => {
        return (carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)).toFixed(2)
    }

    const calcularSubtotal = (prod) => {
        return (prod.precio * prod.cantidad).toFixed(2)
    }

    const eliminarProductoCarrito = (item) => {
        setCarrito(carrito.filter((prod) => prod.id !== item.id))
      }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={ {carrito, vaciarCarrito, calcularSubtotal, sumarCantidad, restarCantidad, agregarCarrito, calcularCantidadCarrito, calcularTotal, eliminarProductoCarrito} }>
            {children}
        </CartContext.Provider>
    )

}