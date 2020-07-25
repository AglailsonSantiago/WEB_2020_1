import React from 'react';
import ReactDOM from 'react-dom';
import Questao1 from './components/questao1/Questao1'
import Questao2 from './components/questao2/Questao2'
import Questao3Pai from './components/questao3/Questao3Pai'
import Questao3Filho from './components/questao3/Questao3Filho'
import Questao4Pai from './components/questao4/Questao4Pai'
import Questao4Filho from './components/questao4/Questao4Filho'
import Questao5PaiBootstrap from './components/questao5/Questao5PaiBootstrap'
import Questao5PFilhoBootstrap from './components/questao5/Questao5FilhoBootstrap'
const root = document.getElementById('root');

ReactDOM.render(
        <div>
            <Questao1/>
            <Questao2/>
            <Questao3Filho>
                <Questao3Pai nome="Chico" curso="Redes" cidade="Guaramiranga/CE"/>
            </Questao3Filho>
            <Questao4Filho>
                <Questao4Pai nome="Maria" curso="EC" cidade="Fortaleza/CE"/>
            </Questao4Filho>
            <Questao5PFilhoBootstrap>
                <Questao5PaiBootstrap nome="Joana" curso="CC" cidade="Quixadá/CE"/>
            </Questao5PFilhoBootstrap>
        </div>

,root);