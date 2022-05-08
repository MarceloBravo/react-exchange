//import thunk from 'redux-thunk';  //Configuración para React 17
import { HomeComponent } from './pages/home/home.jsx'
import { HistoryComponent } from './pages/history/history.jsx'
import { AboutComponent } from './pages/about/about.jsx'
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
            <Route exact path="/history/:id" element={<HistoryComponent/>}></Route>
            <Route exact path="/about" element={<AboutComponent/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider> 
  );
}

export default App;
