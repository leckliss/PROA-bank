import React, { useState } from 'react';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

// Componentes
import Header from './components/header/header';
import Principal from './components/principal/principal';
import Aplicativo from './components/aplicativo/aplicativo';
import Cartoes from './components/cartoes/cartoes';
import Grafico from './components/grafico/grafico';

function App() {

  const [captcha, setCaptcha] = useState("");

  function onClick() {
    if (captcha) {
      alert('Captcha resolvido');
    } else {
      alert('Captcha pendente');
    }
  }

  return (
    <div className="App">
      <Header />
      <Principal />
      <Aplicativo />
      <Cartoes />
      <Grafico />
    </div>
  );
}

export default App;
