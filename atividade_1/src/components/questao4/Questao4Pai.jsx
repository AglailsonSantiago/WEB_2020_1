import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Questao4Pai extends React.Component{
    render() {
        return (
            <div class="card text-white bg-dark mb-3" Style="max-width: 18rem;">
                <div class="card-header"><center>QUESTÃO 4</center></div>
                <div class="card-body">
                    <h5 class="card-title">Nome: {this.props.nome}</h5>
                    <p class="card-text">Curso: {this.props.curso}</p>
                    <p class="card-text">Cidade: {this.props.cidade}</p>
                </div>
            </div>
        )
    }
}