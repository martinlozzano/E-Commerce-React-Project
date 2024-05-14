import React from "react"

import {LogoHeader} from "./LogoHeader"
import {Navbar} from "./Navbar"
import {Carrito} from "./Carrito"

export function Header() {
    
  return (
    <>
        <header className="header">
            <LogoHeader/>
            <Navbar/>
            <Carrito/>
        </header>
    </>
)
}
