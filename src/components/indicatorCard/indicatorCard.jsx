import { unidadMedida } from '../../shared/constants'
import { IndicatorCardContent } from './content'


export const IndicatorCardComponent = (props) => {
    const { fecha, nombre, unidad_medida, valor } = props

    const formatearFecha = (strFecha) => {
        return strFecha ? strFecha.substr(0,10).split('-').reverse().join('-') : ''
    } 

    const formatearValor = (valor, unidad_medida) => {
        return (unidad_medida === 'Pesos' ? unidadMedida.peso : (unidad_medida === 'Dólar' ? unidadMedida.dolar : '' )) + ' ' + formatearNumero(valor) + (unidad_medida === 'Porcentaje' ? '%' : '')
    }

    const formatearNumero = (numero) => {
        return Number(numero).toLocaleString()
    }

    return (
        <IndicatorCardContent
            nombre={nombre} 
            fecha={fecha} 
            valor={valor} 
            unidad_medida={unidad_medida} 
            formatearValor={formatearValor} 
            formatearFecha={formatearFecha}
        />
    )
}