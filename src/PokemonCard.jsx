import React from 'react'
export default class PokemonCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  componentWillUnmount () {
    console.log('Card for Pokemon is being unloaded: ', this.state.name)
  }

  render () {
    return (
        <div>
            <h2>{this.state.name}</h2>
        </div>
    )
  }
}
