import { createSlice } from '@reduxjs/toolkit'

export const indicatorDetailsSlice = createSlice({
    name: 'detalleIndicadores',

    initialState: {data: {
                    version: "",
                    autor: "",
                    codigo: "",
                    nombre: "",
                    unidad_medida: "",
                    serie: []
                }
    },

    reducers:{
        setIndicatorDetails: (state, action) => {
            state.data = action.payload
        }
    }

})

export const { setIndicatorDetails } = indicatorDetailsSlice.actions

export default indicatorDetailsSlice.reducer