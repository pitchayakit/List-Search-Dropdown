import React, { Component } from 'react'

class Input extends Component {
  shouldComponentUpdate(){ return 0 }

  render() {
    const { type, name, inputChange, inputClick, placeholder } = this.props

    return (
      <div>
        <input type={type} name={name} onChange={inputChange} placeholder={placeholder} onClick={inputClick} />
        <i className="fa fa-search"></i>
      </div>
    )
  }
}

export default Input
