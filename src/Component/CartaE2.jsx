import "../Style/CartaE2.css"
import punto from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaE2() {
  return (
    <div className='CartaE2'>
      <div className='CartaE2_1'>
        <span>Excercise</span>
        <img src={punto} alt="" />
      </div>
      <div className='CartaE2_2'>
        <span>4hrs</span>
        <span>Last Week - 5hrs</span>
      </div>
    </div>  
  )
}

export {CartaE2}