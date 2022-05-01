import "../Style/CartaD1.css"
import { CartaD2 } from "./CartaD2"
import libro from "../images/icon-study.svg"
import React from 'react'

function CartaD1() {
  return (
    <div className="CartaD1">
      <div className="libro">
        <img src={libro} alt="" />
      </div>
      <CartaD2/>
    </div>
  )
}

export {CartaD1}