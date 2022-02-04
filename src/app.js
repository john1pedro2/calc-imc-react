import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState } from 'react';
import './app.css';

export default function App(){
  const[weight, setWeight] = useState('');
  const[height, setHeight] = useState('');
  const[mensage, setMensage] = useState('');
  const[enter, setEnter] = useState('false');

   function CalcImc(){
    const h = height / 100;
    const imc = weight / (h * h);

    if( imc < 18){
      setMensage("Você está abaixo do peso ideal com imc de: " + imc.toFixed(2));
    }
    else if( imc >18 && imc <25){
      setMensage("Você está com peso ideal com imc de: " + imc.toFixed(2));
    }
    else if( imc > 25){
      setMensage("Você está acima do peso ideal com imc de: " + imc.toFixed(2));
    }
    else{
      setMensage("Por favor insira seus dados para realizar o cálculo do imc");
    }
    
  }

  return(
      <div className="app">
        <h1>Calculadora Imc</h1>
        <span> Vamos calcular seu IMC</span>
        <div className="area-input">
          <input 
            type="text" 
            placeholder="Peso em (Kg) Ex: 90"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 
          />

          <input 
            type="text" 
            placeholder="Altura em (cm) Ex: 180" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button onClick={CalcImc}>
            Calcular
          </button>
        </div>

        <h2>{mensage}</h2>
      </div>
      
      
  )
}