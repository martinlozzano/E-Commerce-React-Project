import React from "react"

import {Navbar} from "./Navbar"
import {Carrito} from "./Carrito"
import { Logo } from "../../img/Logo"
import { Link } from "react-router-dom"

export function Header() {
    
  return (
    <>
        <header className="header">
            <Link to={"/"}>
                <Logo/>
                <div className="texto-logo"><h1>El Rincón <br/>del Vino</h1></div>
            </Link>
            <Navbar/>
            <Carrito/>
        </header>
    </>
)
}
