import React, { Component } from 'react'
import './App.css'
import Navigate from './components/Navigate'
import Mult from './components/Mult'
import Soma from './components/Soma'
import Maior from './components/Maior'
export default class App extends Component {

  render() {
    return (
      <div className='container' >
        <h1>Calculadora</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <Maior/>
          <Soma/>
          <Mult/>
        </div>
      </div>
    )
  }
}
