import React from 'react'
import './css/main.css'

import {Footer} from './components/Footer'
import {Header} from './components/header/Header'
import {ItemListContainer} from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Proximamente } from './components/Proximamente'
import { Carrito } from './components/Carrito'
import { CartProvider } from './components/context/CartContext'
import { NotFound } from './components/NotFound'
import { CarritoCheckout } from './components/checkout/CarritoCheckout'
import { CompraFinalizada } from './components/checkout/CompraFinalizada'
import { Inicio } from './components/Inicio'


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path="/categorias/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer />}/>
            <Route path="/contactanos" element={<Proximamente greeting={"Proximamente"}/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/checkout_carrito/:checkoutId" element={<CarritoCheckout/>}/> 
            <Route path="/compra_finalizada" element={<CompraFinalizada/>}/> 
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
