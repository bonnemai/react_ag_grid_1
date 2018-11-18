import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Hit Miss Notional'
  },
  series: [{
    data: [[1476365400000, .3], [1476451800000,.234], [1476711000000, .35], [1476797400000, .4], [1476883800000, .45]]
  }]
}

const MyStockChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default MyStockChart
