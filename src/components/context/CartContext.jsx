import React, { useState, createContext } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {
    let [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

    localStorage.setItem("carrito", JSON.stringify(carrito))

    const agregarCarrito = (item, cantidad) => {

        let itemIndex = carrito.findIndex(prod => prod.id === item.id) 

        if (itemIndex === (-1)){
            let producto = {...item, cantidad:cantidad}
            setCarrito ([...carrito, producto])
        } else{
            carrito[itemIndex].cantidad = carrito[itemIndex].cantidad + cantidad
            setCarrito([...carrito])
        } 

        Swal.fire({
            toast: true,
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500,
            position: "top-end",

            customClass: {
                container: "toast",
            }
        })
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
        return (carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0))
    }

    const calcularSubtotal = (prod) => {
        return (prod.precio * prod.cantidad)
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