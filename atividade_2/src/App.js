import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arena1 from './components/questao1/Questao1'
import Arena2 from './components/questao2/Questao2'
import World from './components/questao3/World'
import Arena3 from './components/questao3/Arena'
import {Arena4, Hero, Enemy} from './components/questao4/Arena'

function App() {
  return (
    <div className="App">
      <h2>Questão 1</h2>
      <Arena1></Arena1>
      <h2>Questão 2</h2>
      <Arena2></Arena2>
      <h2>Questão 3</h2>
      <World>
        <Arena3/>
        <Arena3/>
        <Arena3/>
      </World>
      <h2>Questão 4</h2>
      <Arena4 arena="UFC">
        <Hero name="Buki"/>
        <Enemy name="Yujiro"/>
      </Arena4>
      <h2>Questão 5 - BOOTSTRAP</h2>
    </div>
  );
}

export default App;
