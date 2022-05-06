//import thunk from 'redux-thunk';

//import logo from './logo.svg';

import { HomeComponent } from './pages/home/home.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import store from './redux';
import { Provider } from 'react-redux';
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
          </Routes>
        </BrowserRouter>
      </div>
    </Provider> 
  );
}

export default App;
