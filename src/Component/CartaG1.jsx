import "../Style/CartaG1.css"
import { CartaG2 } from "./CartaG2"
import corazon from "../images/icon-self-care.svg"
import React from 'react'

function CartaG1() {
  return (
    <div className="CartaG1">
        <div className="CartaG1_img">
            <img src={corazon} alt="" />
        </div>
        <CartaG2/>
    </div>
  )
}

export {CartaG1}