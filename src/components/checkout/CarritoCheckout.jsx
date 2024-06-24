import React from 'react'
import { CheckoutDatos } from './CheckoutDatos'
import { MinimalCart } from './MinimalCart'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CarritoCheckout = () => {
  return (
    <>
      <div className='carrito-checkout'>
        <CheckoutDatos/>
        <MinimalCart/>
      </div>
   </>
  )
}
