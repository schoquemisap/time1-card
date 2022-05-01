import "../Style/Ct1.css"
import imgCara from "../images/image-jeremy.png"
import React from 'react'

function Ct1() {
  return (
    <div className="Ct1">
        <img src={imgCara} alt="" />
        <div className="label">
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
    </div>
  )
}
export {Ct1}