import React, { Component } from 'react'
import './App.css'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios'

class Chart2 extends Component {
  constructor () {
    super()
    this.state = {
                  title: {
                    text: 'Hit Miss Notional'
                  },
                  series: [{
                    data: [[1476365400000, .3], [1476451800000,.234], [1476711000000, .35], [1476797400000, .4], [1476883800000, .45]]
                  }]
                }


    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:5000/history')
      .then(response => this.setState({'series': response.data}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Update Chart</button>


        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={this.state}
        />

        <p>{this.state.food}</p>
      </div>
    )
  }
}
export default Chart2