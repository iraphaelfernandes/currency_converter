import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./componente/conversor"


function App() {
  return (
    <div className="App">
     <Conversor moedaA="USD" moedaB="BRL">

     </Conversor>
    </div>
  );
}

export default App;
