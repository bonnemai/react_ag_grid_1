import React, { Component } from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import MyStockChart from './Chart';
import Chart2 from './Chart2';
import OBGrid from './Grid';
import Button from './Button';
import Button2 from './Button2';


class App extends Component {
    constructor(props) {
        super(props);

this.state = {
columnDefs: [
                {headerName: "Make", field: "col1"},
                {headerName: "Model", field: "col2"},
                {headerName: "Price", field: "col3"}

            ]
            }
      }
    componentDidMount() {
        fetch('http://localhost:5000/json')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }


    render() {
        return (
        <div>
        <Button/>
        <Chart2/>
        </div>
            );
    }
}

export default App;
