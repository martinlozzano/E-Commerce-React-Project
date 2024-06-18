import React from 'react'
import { CheckoutDatos } from './CheckoutDatos'
import { MinimalCart } from './MinimalCart'
import { useParams } from 'react-router-dom'
import { NotFound } from '../NotFound'

export const CarritoCheckout = () => {
  let checkoutId = useParams().checkoutId
  
  return (
    <div className='carrito-checkout'>
      { (checkoutId !== "datos")  ? <NotFound/> : <>
          { checkoutId === "datos" && <CheckoutDatos/> }
          <MinimalCart/>
        </>
      }
    </div>
  )
}
