import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import PokemonFetcher from './PokemonFetcher'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PokemonFetcher />
      </div>
    )
  }
}

export default App
