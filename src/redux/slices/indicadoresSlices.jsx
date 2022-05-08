import { createSlice } from '@reduxjs/toolkit'

export const bitcoinSlice = createSlice({

    name: 'indicadores',

    initialState: {data: {
                        version: "",
                        autor: "",
                        codigo: "",
                        nombre: "",
                        unidad_medida: "",
                        serie: []
                    },
                    historyData: []
                },

    reducers: {

        setIndicadores: (state, action) => {
            state.data = action.payload
        }, 

        setHistoryData: (state, action) => {
            state.historyData = action.payload
        }
    }
})

export const { setIndicadores, setHistoryData } = bitcoinSlice.actions

export default bitcoinSlice.reducer