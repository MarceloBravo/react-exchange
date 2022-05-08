//import { combineReducers } from 'redux';              //Config para REACT 17
//import { BitcoinReducer } from './bitcoin/reducer'    //Config para REACT 17

//REACT 18 - CONFIGURACIÓN DEL STORE Y REDUX -> https://redux.js.org/tutorials/essentials/part-2-app-structure
import { configureStore } from '@reduxjs/toolkit'
import indicadores from './slices/indicadoresSlices'
import detalleIndicadores from './slices/indicatorDetailsSlice'


export default configureStore({
    reducer:{
        indicadores,
        detalleIndicadores
    },
    //middleware: getDefaultMiddleware => getDefaultMiddleware({nombreMiddleware})
})