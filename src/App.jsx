import React from "react"
import './css/main.css'

import {Footer} from './components/Footer'
import {Header} from './components/header/Header'
import {ItemListContainer} from './components/ItemListContainer'

function App() {

  return (
    <>
      <Header />
      <ItemListContainer greeting={"ItemListContainer (Proximamente)"} />
      <Footer />
    </>
  )
}

export default App
