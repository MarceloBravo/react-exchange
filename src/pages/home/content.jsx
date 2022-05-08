import React from 'react'
import { NavBarComponent } from '../../components/navBar/navBar'
import { IndicatorCardComponent } from '../../components/indicatorCard/indicatorCard'
import './style.css'


export const HomeContent = (props) => {
    const { datos } = props

    return (
        <div className='container-div'>
            <NavBarComponent/>
            <div className="div-content">
            
            <div className='row'>
              {datos &&  datos.map((e, key) => 
                  <IndicatorCardComponent 
                    codigo={e.codigo}
                    key={key}
                    fecha={ e.fecha } 
                    nombre={ e.nombre }
                    unidad_medida={ e.unidad_medida} 
                    valor={ e.valor }
                  />
              )}

            </div>
            
          </div>
        </div>
    )
}