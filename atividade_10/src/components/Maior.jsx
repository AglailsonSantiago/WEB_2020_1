
import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'

class Maior extends Component {
    render() {
        return (
            <Card title='Maior'>
                <h1>
                    {(this.props.valor1 < this.props.valor2) ? this.props.valor2 : this.props.valor1}
                </h1>
            </Card>
        )
    }
}
function mapStateToProps(state) {
    return {
        valor1: state.Valor.valor1,
        valor2: state.Valor.valor2,
    }
}

export default connect(mapStateToProps)(Maior)