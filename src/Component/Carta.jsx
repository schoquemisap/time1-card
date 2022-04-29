import "../Style/Carta.css"
import { Ct1 } from './Ct1'
import React from 'react'

function Carta() {
  return (
    <div className='Carta'>
        <Ct1/>
        <div className="label2">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
        </div>
    </div>
  )
}

export {Carta} 