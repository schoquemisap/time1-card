import "../Style/CartaB2.css"
import puntos from "../images/icon-ellipsis.svg"
import React from 'react'

function CartaB2(props) {
  const time = props.time
  const name = props.name
  const last = props.last

  return (
    <div className="ClaseB2_">
        <div className="ClaseB21">
            <span>{name}</span>
            <img src={puntos} alt="" />
        </div>
        <div className="ClaseB22">
            <span>{time}</span>
            <span>{`Last Week - ${last}`}</span>
        </div>
    </div>
  )
}

export {CartaB2} 