import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class Button2 extends Component {
  constructor () {
    super()
    this.state = {
      food: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:5000/food')
      .then(response => this.setState({food: response.data.food}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.food}</p>
      </div>
    )
  }
}
export default Button2