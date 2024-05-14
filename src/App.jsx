import React from "react"
import './css/main.css'

import {Footer} from './components/Footer'
import {Header} from './components/header/Header'
import {ItemsContainer} from './components/ItemsContainer'


function App() {

  return (
    <>
      <Header />
      <ItemsContainer/>
      <Footer />
    </>
  )
}

export default App
