import { unidadMedida } from './constants'

export const formatearFecha = (strFecha) => {
    return strFecha ? strFecha.substr(0,10).split('-').reverse().join('-') : ''
} 

export const formatearValor = (valor, unidad_medida) => {
    return (unidad_medida === 'Pesos' ? unidadMedida.peso : (unidad_medida === 'Dólar' ? unidadMedida.dolar : '' )) + ' ' + formatearNumero(valor) + (unidad_medida === 'Porcentaje' ? '%' : '')
}

export const formatearNumero = (numero) => {
    return Number(numero).toLocaleString()
}