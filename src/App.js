import React from 'react';
import './App.css';

//components
import Header from './components/header/header';
import Principal from './components/principal/principal';
import Aplicativo from './components/aplicativo/aplicativo';
import Cartoes from './components/cartoes/cartoes';
import Grafico from './components/grafico/grafico';

function App() {
  return (
    <div className="App">
      <Header/>
      <Principal/>
      <Aplicativo/>
      <Cartoes/>
      <Grafico/>
    </div>
  );
}

export default App;
