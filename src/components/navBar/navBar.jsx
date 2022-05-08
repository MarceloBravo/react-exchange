import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavBarContent } from './content'

export const NavBarComponent = () => {
    const state = useSelector(state => state.indicadores.data )
    const [ datos, setDatos ] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };


    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);


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
        <NavBarContent datos={datos} shadow={scrollPosition > 0}/>  
    )
} 