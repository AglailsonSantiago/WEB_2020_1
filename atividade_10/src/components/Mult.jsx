import React, {Component} from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Mult extends Component{
    render(){
        return (
            <Card title='Multiplicação'>
                <div>
                    <h1>
                        {this.props.valor1 * this.props.valor2}
                    </h1>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        valor1: state.Valor.valor1,
        valor2: state.Valor.valor2
    }
}

export default connect(mapStateToProps)(Mult)