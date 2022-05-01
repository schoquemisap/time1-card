import "../Style/CartaD2.css"
import puntoD2 from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaD2() {
  return (
    <div className='CajaD2'>
      <div className='CajaD2_1'>
        <span>Study</span>
        <img src={puntoD2} alt="" />
      </div>
      <div className='CajaD2_2'>
        <span>4hrs</span>
        <span>Last Week - 7hrs</span>
      </div>
    </div>  
  )
}

export {CartaD2} 