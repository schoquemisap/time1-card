import "../Style/CartaF1.css"
import { CartaF2 } from "./CartaF2"
import img_Social from "../images/icon-social.svg"
import React from 'react'

function CartaF1() {
  return (
    <div className="CartaF1">
        <div className='CartaF1_img'>
            <img src={img_Social} alt="" />
        </div>
        <CartaF2/>
    </div>
  )
}

export {CartaF1} 