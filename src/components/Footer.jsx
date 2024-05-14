import React from "react"
import {Github, Instagram, Twitter} from "../img/LogosFooter"

export function Footer() {
  return (
    <>
      <footer className="footer">
        <hr/>
        <div className="container">
          <span>copyright ©</span>
          <div className="social">
            <a href="#0" target="_blank" rel="noopener noreferrer"  className="twitter">
              <Github/>
            </a>
            <a href="#0" target="_blank" rel="noopener noreferrer"  className="github">
              <Instagram/>
            </a>
            <a href="#0" target="_blank" rel="noopener noreferrer"  className="instagram">
              <Twitter/>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
