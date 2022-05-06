import "../Style/CartaB1.css"
import { CartaB2 } from './CartaB2'
import React from 'react'

function CartaB1(props) {
  const img = props.img
  const back = 'CartaB1_ ' + props.back
  const time = props.time
  const name = props.name
  const last = props.last
  return (

    <div className={back}>  
      <div className="maleta">
       <img src={img} className="maletaB" alt="" /> 
      </div> 
       <CartaB2 time = {time} name = {name} last = {last}/>
    </div>
  )
}

export {CartaB1}