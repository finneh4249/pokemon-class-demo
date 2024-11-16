import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
// const pokemonList = [
//   'pikachu',
//   'charmander',
//   'squirtle',
//   'bulbasaur',
//   'jigglypuff'
// ]
export default class PokemonFetcher extends Component {
    constructor (props) {
      super(props)
      this.state = {
        pokemonList: []
      }
    }
    async componentDidMount () {
        const randomPokemon = Math.ceil(Math.random() * 1025)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        const pokemon = await response.json()
        this.setState({ pokemonList: [pokemon.name] })
        console.log('Pokemon Fetcher Component mounted')
    }
  render () {
    return (
      <div>
        <h1>Pokemon Data</h1>
        {this.state.pokemonList.map(pokemon => {
          return <PokemonCard key={pokemon} name={pokemon} />
        })}
        <button onClick={() => this.componentDidMount()}>Fetch Pokemon</button>
        <button onClick={() => this.setState({ pokemonList: [''] })}>Clear Pokemon</button>
      </div>
    )
  }
}
