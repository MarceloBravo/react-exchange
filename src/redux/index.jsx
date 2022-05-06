//import { combineReducers } from 'redux';              //Config para REACT 17
//import { BitcoinReducer } from './bitcoin/reducer'    //Config para REACT 17

//REACT 18 - CONFIGURACIÓN DEL STORE Y REDUX -> https://redux.js.org/tutorials/essentials/part-2-app-structure
import { configureStore } from '@reduxjs/toolkit'
import bitcoin from './slices/indicadoresSlices'


export default configureStore({
    reducer:{
        bitcoin,
    },
    //middleware: getDefaultMiddleware => getDefaultMiddleware({nombreMiddleware})
})