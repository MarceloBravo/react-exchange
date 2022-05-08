import React from 'react'
import { NavBarComponent } from '../../components/navBar/navBar'
import ReactApexChart from 'react-apexcharts'
import './style.css'

export const HistoryContent = (props) => {
    const { 
        state,
        fechaDesde, 
        fechaHasta,
        chartStateGrafico1,
        chartStateGrafico2,
        chartStateGrafico3
    } = props

    return (
        <div className='container-div'>
            <NavBarComponent/>
                
            <div className="div-content">
                <h1>{state.nombre}</h1>
                <h3>Datos del último mes ({ fechaDesde } - { fechaHasta })</h3>
                <div className='row'>

                    <ReactApexChart 
                        options={chartStateGrafico1.options} 
                        series={chartStateGrafico1.series} 
                        type="area" 
                        height={320}
                    />
                    
                </div>
            
          </div>

          <div className="div-content">
                <h1>{state.nombre}</h1>
                <h3>Datos últimos 20 años ({ fechaDesde } - { fechaHasta })</h3>
                <p>Obs. El grafico puede tardar en mostrarse</p>
                <div className='row'>
                
                    <ReactApexChart 
                        options={chartStateGrafico2.options} 
                        series={chartStateGrafico2.series} 
                        type="area" 
                        height={320}
                    />
                    
                </div>
            
          </div>

          <div className="div-content">
                <h1>{state.nombre}</h1>
                <h3>Proyección próximos 10 años</h3>
                <p>Obs. El grafico puede tardar en mostrarse</p>
                <div className='row'>   
                
                    <ReactApexChart 
                        options={chartStateGrafico3.options} 
                        series={chartStateGrafico3.series} 
                        type="area" 
                        height={320}
                    />
                    
                    <p>Obs.: Para realizar la proyección se utilizó el <a href="http://davidespinosa.es/joomla/index.php?option=com_content&view=article&id=339:estimacion-de-la-tendencia-de-una-serie-temporal&catid=80:analisis-externo" target="_blank" rel="noopener noreferrer">médoto de las 2 medias.</a> </p>
                </div>
            
          </div>
        </div>
    )
}