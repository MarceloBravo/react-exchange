import { useEffect, useState } from 'react'
import { getExchanges } from '../../actions/indicadores'
import { useDispatch, useSelector } from 'react-redux' 
import { HomeContent } from './content'


export const HomeComponent = () => {
  const dispatch = useDispatch()
  const state = useSelector(store => store.indicadores.data )
  const [ datos, setDatos ] = useState(null)

    useEffect(() => {
      dispatch(getExchanges())
    },[dispatch])


    useEffect(() => {
      let arrDatos = []
        Object.keys(state).forEach(k => {
          if(!['fecha','valor','autor','version'].includes(k)){
            arrDatos.push(state[k])
          }
        })
        setDatos(arrDatos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])


    return (
      <HomeContent datos={datos}/>
    )
}