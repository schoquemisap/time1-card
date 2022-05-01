import "../Style/CartaG2.css"
import punto from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaG2() {
  return (
    <div className="CartaG2">
        <div className="CartaG2_1">
            <span>Self Care</span>
            <img src={punto} alt="" />
        </div>
        <div className="CartaG2_2">
            <span>2hrs</span>
            <span>Last Week - 2hrs</span>
        </div>
    </div>
  )
}

export {CartaG2}