import React, { Component } from 'react';
import axios from 'axios';


export default class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      food: 'Chinese'
    };
  }

  handleSubmit(event) {
    const {
      food
    } = this.state;

    event.preventDefault();

    // do something with form values, and then
    axios.post('http://localhost:5000/food', {
      food
    }).then(response => response.json).then(

    results => this.setState({results})
      // do something with response, and on response
    ).catch(error => {
    console.log('Error: '+error)
      // do something when request was unsuccessful
    });
  }

  render() {
    return (
      <div>
      <div>
        <form
          method="post"
          onSubmit={event => this.handleSubmit(event)}>
          <p>I like <span name="food">{this.state.food}</span> food</p>
          <button type="submit">Butane</button>
        </form>
      </div>

      <div id="results">{this.state.results}</div>
      </div>
    );
  }
}
