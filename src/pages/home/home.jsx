import React, { useEffect } from 'react'
import { getExchanges } from '../../actions/indicadores'
import { useDispatch } from 'react-redux'

export const HomeComponent = () => {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getExchanges())
    },[dispatch])

    return (
        <div>
            <header className="App-header">
            
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </header>
        </div>
    )
}