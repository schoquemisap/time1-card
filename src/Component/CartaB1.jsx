import "../Style/CartaB1.css"
import Maleta_og from "../images/icon-work.svg"
import { CartaB2 } from './CartaB2'
import React from 'react'

function CartaB1() {
  return (

    <div className="CartaB1_">  
      <div className="maleta">
       <img src={Maleta_og} alt="" /> 
      </div> 
       <CartaB2/>
    </div>
  )
}

export {CartaB1}