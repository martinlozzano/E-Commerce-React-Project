import React, { useEffect } from "react"
import './css/main.css'

import {Footer} from './components/Footer'
import {Header} from './components/header/Header'
import {ItemListContainer} from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import {  Proximamente } from "./components/Proximamente"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Proximamente greeting={"Proximamente"}/>}/>
          <Route path="/productos" element={<ItemListContainer />}/>
          <Route path="/categorias/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/servicios" element={<Proximamente greeting={"Proximamente"}/>}/>
          <Route path="/contactanos" element={<Proximamente greeting={"Proximamente"}/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
