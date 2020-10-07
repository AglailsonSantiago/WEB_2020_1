import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'

class Navigate extends Component {

    render() {
        return (
            <div className='line'>
                <Card title='Valor 1'>
                    <h1>{this.props.valor1}</h1>
                </Card>

                <Card title='Valor 2'>
                    <h1>{this.props.valor2}</h1>
                </Card>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor1: state.Valor.valor1,
        valor2: state.Valor.valor2
    }
}

export default connect(mapStateToProps)(Navigate)