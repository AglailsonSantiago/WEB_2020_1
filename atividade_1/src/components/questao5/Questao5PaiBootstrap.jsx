import React from 'react';

export default class Questao5PaiBootstrap extends React.Component{
    render() {
        return (
            <div class="card text-white bg-dark mb-3" Style="max-width: 18rem;">
                <div class="card-header"><center>QUESTÃO 5</center></div>
                <div class="card-body">
                    <h5 class="card-title">Nome: {this.props.nome}</h5>
                    <p class="card-text">Curso: {this.props.curso}</p>
                    <p class="card-text">Cidade: {this.props.cidade}</p>
                </div>
            </div>
        )
    }
}