import React from 'react'
import { NavBarComponent } from '../../components/navBar/navBar'

export const AboutComponent = () => {

    return (
        <div className='container-div'>
            <NavBarComponent/>

            <div className="div-content">
                <div>
                    <img src="/logo192.png" alt="" />
                    <div>
                        Esta aplicación ha sido desarrollada con React 18
                    </div>
                    <div>
                        Desarrollado por Marcelo Bravo C.
                    </div>
                </div>
            </div>
        </div>
    )
}