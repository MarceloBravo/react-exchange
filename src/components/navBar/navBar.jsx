import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavBarContent } from './content'

export const NavBarComponent = () => {
    const state = useSelector(state => state.bitcoin.data )
    const [ datos, setDatos ] = useState([])

    useEffect(() => {
        let arrDatos = []
        Object.keys(state).forEach(k => {
          if(!['fecha','valor','autor','version'].includes(k)){
            arrDatos.push(state[k])
          }
        })
        setDatos(arrDatos)
    },[state])

    return (
        <NavBarContent datos={datos}/>  
    )
} 