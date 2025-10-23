import { useState } from 'react';
// IMPORTANTE: Importar o arquivo CSS
import './estiloSemaforo.css'; 
//###################################
import SemaforoLuz from './SemaforoLuz.jsx';

const SemaforoSimulador = () => {
  // Estado para controlar a cor atual
  const [corAtual, setCorAtual] = useState('azul');

  // Funções de Ação (Handlers dos Botões)
  const irParaVermelho = () => setCorAtual('vermelho');
  const irParaAmarelo = () => setCorAtual('amarelo');
  const irParaVerde = () => setCorAtual('verde');
  const irParaAzul = () => setCorAtual('azul');

  // Função BÔNUS para Avançar
  const avancarSinal = () => {
    switch (corAtual) {
      case 'azul': setCorAtual('verde'); break;
      case 'verde': setCorAtual('amarelo'); break;
      case 'amarelo': setCorAtual('vermelho'); break;
      default: setCorAtual('azul');
    }
  };

  const retornarSinal = () => {
    switch (corAtual) {
      case 'vermelho': setCorAtual('amarelo'); break;
      case 'amarelo': setCorAtual('verde'); break;
      case 'verde': setCorAtual('azul'); break;
      default: setCorAtual('vermelho');
    }
  };

  return (
    <div>
      <h1>Simulador de Semáforo <br/> (Controle de Estado com useState)</h1>

      {/* Aplicando a classe CSS externa ao container do semáforo */}
      <div className="semaforo-container">
        {/* Passando a 'corBase' como string (red, yellow, green) e o estado 'aceso' */}
        <SemaforoLuz corBase="red" aceso={corAtual === 'vermelho'} />
        <SemaforoLuz corBase="yellow" aceso={corAtual === 'amarelo'} />
        <SemaforoLuz corBase="green" aceso={corAtual === 'verde'} />
        <SemaforoLuz corBase="blue" aceso={corAtual === 'azul'} />
      </div>

      <div>
        <h2>Cor Atual: {corAtual.toUpperCase()}</h2>

        {/* Botões usando as classes CSS para estilo */}
        <button 
            onClick={irParaVermelho} 
            className="botao-controle botao-red"
        >
          VERMELHO
        </button>
        <button 
            onClick={irParaAmarelo} 
            className="botao-controle botao-yellow"
        >
          AMARELO
        </button>
        <button 
            onClick={irParaVerde} 
            className="botao-controle botao-green"
        >
          VERDE
        </button>
        <button 
            onClick={irParaAzul} 
            className="botao-controle botao-blue"
        >
          AZUL
        </button>
        

        <button 
            onClick={avancarSinal} 
            className="botao-controle botao-avancar"
        >
          Avançar Sinal
        </button>

        <button 
            onClick={retornarSinal} 
            className="botao-controle botao-retornar"
        >
          Retornar Sinal
        </button>
      </div>
    </div>
  );
};


export default SemaforoSimulador;