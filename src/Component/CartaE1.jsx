import "../Style/CartaE1.css"
import { CartaE2 } from './CartaE2'
import img_Ejercicio_E1 from "../images/icon-exercise.svg"
import React from 'react'

function CartaE1() {
  return (
    <div className='CartaE1'>
        <div className='img_Ejercicio'>
            <img src={img_Ejercicio_E1} alt="" />
        </div>
        <CartaE2/>
    </div>
  )
}

export {CartaE1} 