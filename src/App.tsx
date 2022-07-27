import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import routes from './Route/Route';
import ThemeContextProvider from './Context/ThemeContext';

import Btn from './Components/Button/Btn';

function App() {
  return (
    <div >
    <ThemeContextProvider>
     <Navbar/>
     <Btn/>
      
    <Routes>
      {routes.map((item)  => {
        return(
          <Route path={item.path} element={item.component}/>
        );
      })}
    </Routes>
    </ThemeContextProvider>

   
    </div>
  );
}

export default App;
