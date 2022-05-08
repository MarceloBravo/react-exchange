import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

export const IndicatorCardContent = (props) => {
    const { nombre, fecha, valor, unidad_medida, formatearValor, formatearFecha, cardClick } = props

    return (
        <Card bg="secondary" style={{ width: '18rem' }} onClick={() => cardClick()} title="Ver detalles">
            <Card.Body>
                <Card.Title>{ nombre }</Card.Title>
                <Card.Subtitle className="mb-2 subtitle">{ formatearFecha(fecha) }</Card.Subtitle>
                <Card.Text className='indicator-info'>
                    <label className="label-info">Valor: </label>  { formatearValor(valor, unidad_medida) }
                </Card.Text>
            </Card.Body>
        </Card>
    )
} 