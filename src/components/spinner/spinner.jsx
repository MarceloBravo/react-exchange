import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import './style.css'

export const SpinnerComponent = (props) => {
    const { mensaje, cantidadSpinners, color, className } = props
    // eslint-disable-next-line
    const [ fontColor, setFontColor ] = useState(() => color ? color : 'white')
    // eslint-disable-next-line
    const [ mostrados, setMostrados ] = useState(() =>{
        let limit = parseInt(cantidadSpinners ? (cantidadSpinners > 5 ? 5 : cantidadSpinners): 1)
        return (new Array(limit)).fill(null)
    }) 
    

    return (
        <div style={{'color': fontColor}} className={className}>
            <div>
                { mostrados.map((value, key)=>{
                        return <Spinner animation="grow" key={key}/>
                    })
                }
            </div>
            <p>{ mensaje }</p>
        </div>
    )
}