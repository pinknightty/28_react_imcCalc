import { useState } from "react"

function ImcCalc() {
  const [alturaValor, setAlturaValor] = useState('');
  const [pesoValor, setPesoValor] = useState('');
  const [imcValor, setImcValor] = useState('');
  const [imcMsg, setImcMsg] = useState('');


  const calcularImc = () => {
    if (alturaValor && pesoValor) {
      const alturaMetros = alturaValor / 100;
      const imc = (pesoValor /(alturaMetros * alturaMetros)).toFixed(2);
      setImcValor(imc);

      let mensagem ='';
      if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso';
      } else if (imc >= 18.5 && imc < 25) {
        mensagem = 'Seu peso está normal';
      } else if (imc >= 25 && imc < 30) {
        mensagem = 'Você está com sobrepeso';
      } else {
        mensagem = 'Você está obeso';
      }
      setImcMsg(mensagem);
    } else {
      setImcValor('');
      setImcMsg('');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <div className="input-container">
        <label htmlFor="altura">Coloque sua altura (cm): </label>
        <input 
          type="number" 
          id="altura" 
          value={alturaValor} 
          onChange={(e) => setAlturaValor(e.target.value)} 
        />
      </div>
      <div className="input-container">
        <label htmlFor="peso">Coloque seu peso (kg): </label>
        <input 
          type="number" 
          id="peso" 
          value={pesoValor} 
          onChange={(e) => setPesoValor(e.target.value)} 
        />
      </div>
      <button className="calcular-btn" onClick={calcularImc}>
        Clique para calcular o IMC
      </button>

      {imcMsg && imcValor (
        <div className="resultado">
          <p>
            Seu IMC: <span className="imc-valor">{imcValor}</span>
          </p>
          <p>
            Resultado: <span className="imc-mensagem">{imcMsg}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ImcCalc;


