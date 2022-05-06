import { createSlice } from '@reduxjs/toolkit'

export const bitcoinSlice = createSlice({

    name: 'bitcoin',

    initialState: {data: {
                        version: "",
                        autor: "",
                        codigo: "",
                        nombre: "",
                        unidad_medida: "",
                        serie: []
                    }
                },

    reducers: {

        setIndicadores: (state, action) => {
            state.data = action.payload
        }, 

    }
})

export const { setIndicadores } = bitcoinSlice.actions

export default bitcoinSlice.reducer