import "../Style/CartaB2.css"
import puntos from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaB2() {
  return (
    <div className="ClaseB2_">
        <div className="ClaseB21">
            <span>Work</span>
            <img src={puntos} alt="" />
        </div>
        <div className="ClaseB22">
            <span>32hrs</span>
            <span>Last Week 32 - hrs</span>
        </div>
    </div>
  )
}

export {CartaB2} 