import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) =>{
        return  <div class="card text-white bg-dark mb-3" Style="max-width: 18rem;">
                    <div class="card-header"><center>QUESTÃO 3</center></div>
                    <div class="card-body">
                        <h5 class="card-title">Nome: {props.nome}</h5>
                        <p class="card-text">Curso: {props.curso}</p>
                        <p class="card-text">Cidade: {props.cidade}</p>
                    </div>
                </div>
}