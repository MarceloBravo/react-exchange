//import thunk from 'redux-thunk';  //Configuración para React 17
import { HomeComponent } from './pages/home/home.jsx'
import { HistoryUFComponent } from './pages/historyUF/historyuF.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux';
import { Provider } from 'react-redux';

import './App.css';

/*
//Configuración para REACT 17
import { createStore, applyMiddleware } from 'redux';
const store = createStore(combineReducer, applyMiddleware(thunk)) 
*/

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>}></Route>
            <Route exact path="/historyuf" element={<HistoryUFComponent/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider> 
  );
}

export default App;
