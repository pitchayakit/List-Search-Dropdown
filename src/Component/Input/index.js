import React, { Component } from 'react'

class Input extends Component {
  shouldComponentUpdate(){ return 0 }

  render() {
    const { type, name, inputChange, placeholder } = this.props

    return <input type={type} name={name} onChange={inputChange} placeholder={placeholder} />
  }
}

export default Input
