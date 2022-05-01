import "../Style/CartaF2.css"
import punto from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaF2() {
  return (
    <div className='CartaF2'>
      <div className='CartaF2_1'>
        <span>Social</span>
        <img src={punto} alt="" />
      </div>
      <div className='CartaF2_2'>
        <span>5hrs</span>
        <span>Last Week - 10hrs</span>
      </div>
    </div>  
  )
}

export {CartaF2}