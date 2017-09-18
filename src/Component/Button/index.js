import React, { Component } from 'react'

class Button extends Component {

  render() {
    const { backButtonClick, label  } = this.props

    return <button type="button" onClick={backButtonClick}>{label}</button>
  }
}

export default Button
