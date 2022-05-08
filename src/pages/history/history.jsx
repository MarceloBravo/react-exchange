import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExchanges } from '../../actions/indicadores'
import { getIndicatorData, getHistoryData } from '../../actions/indicadores'
import { useParams } from 'react-router-dom'
import { formatearFecha } from '../../shared/funciones'
import { HistoryContent } from './content'

//https://www.npmjs.com/package/react-apexcharts
//https://apexcharts.com/react-chart-demos/line-charts/zoomable-timeseries/

export const HistoryComponent = () => {
    const params = useParams('id')

    const [ chartStateGrafico1, setChartStateGrafico1 ] = useState({options: {}, series: []})
    const [ chartStateGrafico2, setChartStateGrafico2 ] = useState({options: {}, series: []})
    const [ chartStateGrafico3, setChartStateGrafico3 ] = useState({options: {}, series: []})

    const [ datosEjeXGrafico1, setDatosEjeXGrafico1 ] = useState([])
    const [ datosEjeYGrafico1, setDatosEjeYGrafico1 ] = useState([])
    const [ datosEjeXGrafico2, setDatosEjeXGrafico2 ] = useState([])
    const [ datosEjeYGrafico2, setDatosEjeYGrafico2 ] = useState([])
    const [ datosEjeXGrafico3, setDatosEjeXGrafico3 ] = useState([])
    const [ datosEjeYGrafico3, setDatosEjeYGrafico3 ] = useState([])

    const [ promediosEjeX, setPromediosEjeX ] = useState({promedio1: 0, promedio2: 0}) 
    const [ promediosEjeY, setPromediosEjeY ] = useState({promedio1: 0, promedio2: 0}) 

    const [ fechaDesde, setFechaDesde ] = useState('')
    const [ fechaHasta, setFechaHasta ] = useState('')
    const [ anioDesde ] = useState(() => {
        let fecha = new Date()
        return (fecha.getFullYear() - 20)
    })
    const [ anioHasta ] = useState(() => {
        let fecha = new Date()
        return fecha.getFullYear()
    })
    const [ id ] = useState(params.id)
    const state = useSelector(state => state.detalleIndicadores.data)
    const stateDatosHistoricos = useSelector(state => state.indicadores.historyData)
    const dispatch = useDispatch()


    //Reseteando y obteniendo los datos iniciales
    useEffect(()=>{
        dispatch(getIndicatorData(id))
        dispatch(getHistoryData(id, anioDesde, anioHasta))
    },[dispatch, id, anioDesde, anioHasta])
    

    //Preparando los datos para el gráfico histórico
    useEffect(()=> {
        let datosEjeX = stateDatosHistoricos.filter(i => i.serie[0] !== undefined).map(i => formatearFecha((i.serie[0].fecha)))
        let datosEjeY = stateDatosHistoricos.filter(i => i.serie[0] !== undefined).map(i => i.serie[0].valor)
        console.log('datosEjes', datosEjeX, datosEjeY)
        setDatosEjeXGrafico2(datosEjeX)
        setDatosEjeYGrafico2(datosEjeY)
    },[stateDatosHistoricos])


    //Preparando los datos para el gráfico del último mes
    useEffect(()=>{
        let datosX = []
        let datosY = []
        state.serie.forEach(i => {
            datosX.push(i.fecha.substr(0,10).split('-').reverse().join('-'))
            datosY.push(i.valor)
        })
        setDatosEjeXGrafico1(datosX.reverse())
        setDatosEjeYGrafico1(datosY.reverse())
        if(state?.serie?.length > 0){
            setFechaDesde(formatearFecha(state.serie[state.serie.length-1].fecha))
            setFechaHasta(formatearFecha(state.serie[0].fecha))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])


    //Configurando los datos del grafico para el último més
    useEffect(() => {

        dispatch(getExchanges())

        setChartStateGrafico1({options: {
            chart: {
                id: 'apexchart-' + id
            },
            xaxis: {
                categories: datosEjeXGrafico1
            }
        },
        series: [{
            name: 'series-1',
            data: datosEjeYGrafico1
        }]
    })

    },[datosEjeXGrafico1, datosEjeYGrafico1, id, dispatch])


    //Configurando los datos del grafico histórico
    useEffect(() => {

        setChartStateGrafico2({options: {
            chart: {
                id: 'apexchart-' + id
            },
            xaxis: {
                categories: datosEjeXGrafico2
            }
        },
        series: [{
            name: 'series-1',
            data: datosEjeYGrafico2
        }]
    })

    obtenerPromediosEjesXY()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[datosEjeXGrafico2, datosEjeYGrafico2, id, dispatch])




    //Configurando los datos de proyección a futuro
    useEffect(() => {

        setChartStateGrafico3({options: {
            chart: {
                id: 'apexchart-' + id
            },
            xaxis: {
                categories: datosEjeXGrafico3
            }
        },
        series: [{
            name: 'series-1',
            data: datosEjeYGrafico3
        }]
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[datosEjeXGrafico3, datosEjeYGrafico3, id, dispatch])



    useEffect(()=> {
        let anios = []
        let valores = []
        let fecha = new Date()
        for(let y = fecha.getFullYear(); y < fecha.getFullYear() + 10; y++){
            anios.push('31-12-' + y)
            valores.push(obtenerProyeccion(y))
        }

        setDatosEjeXGrafico3(anios)
        setDatosEjeYGrafico3(valores)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[promediosEjeX, promediosEjeY])



    const obtenerPromediosEjesXY = () => {
        let totalRegistros = datosEjeXGrafico2.length
        if(totalRegistros > 0 && totalRegistros > 0){
            
            let arrMitad1_ejeX = datosEjeXGrafico2.slice(0, totalRegistros/2)
            let arrMitad2_ejeX = datosEjeXGrafico2.slice(totalRegistros/2, totalRegistros)            
            let arrMitad1_EjeY = datosEjeYGrafico2.slice(0, totalRegistros/2)
            let arrMitad2_EjeY = datosEjeYGrafico2.slice(totalRegistros/2, totalRegistros)            

            let promedioX_1 = calcularPromedio(arrMitad1_ejeX.map(i => i.split('-')[2]))
            let promedioX_2 = calcularPromedio(arrMitad2_ejeX.map(i => i.split('-')[2]))
            let promedioY_1 = calcularPromedio(arrMitad1_EjeY)
            let promedioY_2 = calcularPromedio(arrMitad2_EjeY)

            setPromediosEjeX({promedio1: promedioX_1, promedio2: promedioX_2})
            setPromediosEjeY({promedio1: promedioY_1, promedio2: promedioY_2})
        }
    }


    const calcularPromedio = (arrDatos) => {
        if(arrDatos.length === 0)return 0
        let suma = 0

        arrDatos.forEach(i => { 
            suma += parseFloat(i)
        })
        return  (suma /arrDatos.length).toFixed(2)
    }


    const obtenerProyeccion = (anio) => {
        let res = ((promediosEjeY.promedio2 - promediosEjeY.promedio1)/ (promediosEjeX.promedio2 - promediosEjeX.promedio1)) * (anio - promediosEjeX.promedio1) + parseFloat(promediosEjeY.promedio1)
        
        return res.toFixed(2)
    }


    return (
        <HistoryContent 
            state={state}
            fechaDesde={fechaDesde} 
            fechaHasta={fechaHasta}
            chartStateGrafico1={chartStateGrafico1}
            chartStateGrafico2={chartStateGrafico2}
            chartStateGrafico3={chartStateGrafico3}
        />
        
    )
}