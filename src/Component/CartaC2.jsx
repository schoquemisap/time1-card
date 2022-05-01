import "../Style/CartaC2.css"
import puntos from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaC2() {
  return (
    <div className="CartaC2">
      <div className="CartaC2_1">
        <span>Play</span>
        <img src={puntos} alt="" />
      </div>
      <div className="CartaC2_2">
        <span>10hrs</span>
        <span>Last Week - 8hrs</span>
      </div>
    </div>
  )
}

export {CartaC2} 