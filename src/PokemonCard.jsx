import React from 'react'
export default class PokemonCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  render () {
    return (
        <div>
            <h2>{this.state.name}</h2>
        </div>
    )
  }
}
