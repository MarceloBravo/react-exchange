import axios from 'axios'
import { setIndicadores } from '../redux/slices/indicadoresSlices'
import { endPoint } from '../shared/constants'


export const getExchanges = () => async (dispatch) =>{
    axios
        .get(endPoint)
        .then(resp => {
            dispatch(setIndicadores(resp.data))
        })
        .catch(error => {
            console.log(error)
        })
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