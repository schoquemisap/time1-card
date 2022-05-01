import "../Style/CartaC1.css"
import mando from "../images/icon-play.svg"
import { CartaC2 } from './CartaC2'
import React from 'react'

function CartaC1() {
  return (
    <div className='CartaC1'>
      <div className="mando">
        <img src={mando} alt="" />
      </div>
      <CartaC2/>
    </div>
  )
}

export {CartaC1} 