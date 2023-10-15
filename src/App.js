import React, { useState } from 'react';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

// Componentes
import Header from './components/header/header';
import Principal from './components/principal/principal';
import Aplicativo from './components/aplicativo/aplicativo';
import Cartoes from './components/cartoes/cartoes';
import Grafico from './components/grafico/grafico';
import Sobre from './components/sobre/sobre';
import Footer from './components/footer/footer';
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
      <Sobre/>
      <Footer />
    </div>
  );
}

export default App;
