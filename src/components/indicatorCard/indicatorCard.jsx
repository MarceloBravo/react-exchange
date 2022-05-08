import { IndicatorCardContent } from './content'
import { formatearFecha, formatearValor } from '../../shared/funciones'
import { useNavigate } from 'react-router-dom'


export const IndicatorCardComponent = (props) => {
    const { codigo, fecha, nombre, unidad_medida, valor } = props
    const navigate = useNavigate()

    const cardClick = () => {
        navigate('/history/'+codigo)
    }

    return (
        <IndicatorCardContent
            nombre={nombre} 
            fecha={fecha} 
            valor={valor} 
            unidad_medida={unidad_medida} 
            formatearValor={formatearValor} 
            formatearFecha={formatearFecha}
            cardClick={cardClick}
        />
    )
}