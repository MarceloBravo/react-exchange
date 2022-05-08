import axios from 'axios'
import { setIndicadores, setHistoryData } from '../redux/slices/indicadoresSlices'
import { setIndicatorDetails } from '../redux/slices/indicatorDetailsSlice'
import { endPoint } from '../shared/constants'


//Trae los valores de los indicadores para el día actual
export const getExchanges = () => async (dispatch) =>{
    axios
        .get(endPoint)
        .then(resp => {
            dispatch(setIndicadores(resp.data))
        })
        .catch(error => {
            console.log('getExchanges',error)
        })
} 


//Trae el valor de un indicador en particular para el último més
export const getIndicatorData = indicador => async (dispatch) => {
    axios
        .get(endPoint + indicador)
        .then(resp => {
            console.log('ÚLTIMO MES', indicador, resp.data)
            dispatch(setIndicatorDetails(resp.data))          
        })
        .catch(error => {
            console.log('getIndicatorData',error)
        })
}


//Trae los valores historicos para un indicador en particular
export const getHistoryData = (indicador, anioDesde, anioHasta) => async (dispatch) => {
    let result = []
    try{
        let valoresHistoricos = await obtenerValoresHistoricos(indicador, anioDesde, anioHasta)  
        if(valoresHistoricos) result = valoresHistoricos

        let valorHoy = await obtenerValorHoy(indicador, anioHasta)
        if(valorHoy)result.push(valorHoy)
        
        console.log('HISTÓRICO',indicador, result)
        dispatch(setHistoryData(result))
    }catch(error){
        console.log('getHistoryData',error)
    }
}


const obtenerValoresHistoricos = async (indicador, anioDesde, anioHasta) => {
    
    let result = []
    for(let y = anioDesde; y < anioHasta; y++){
        let resp =  await axios.get(`${endPoint + indicador}/${y}`)
        if(resp?.data){
            result.push(resp.data)
        }
    }
    return result
}



const obtenerValorHoy = async (indicador, anio)  => {
    let resp = null
    let fecha = new Date()
    if(fecha.getFullYear() === anio){
        resp = await axios.get(`${endPoint + indicador}/${fecha.getDate()}-${fecha.getMonth() + 1}-${anio}`)
    }
    return resp?.data ? resp.data : null
}




/*
//import { types as bitcoinTypes } from '../redux/bitcoin/types'    //Cnfig para REACT 17

//Función para REACT 17
export const getBitcoin = () =>  {

    console.log('xxxxxxxx')

    return (dispatch) => {

        console.log(dispatch)
        axios.get(endPoint).then(res => {
            dispatch(setBitcoinData(res.data))
        }).catch(error => {
            console.log('ERROR',error)
        })
    }

}
*/