import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Questao4Filho extends React.Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}