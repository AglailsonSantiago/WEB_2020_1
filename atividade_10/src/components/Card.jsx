import React, {Component} from 'react'
import './Card.css'

export default class Card extends Component{

    render(){
        return(
            <div className= {`card text-white bg-secondary`}>
                <div className='card-header'>
                    {this.props.title}  
                </div>
                <div className='card-body'>
                {this.props.children}   
                </div>

            </div>
        )
    }
}