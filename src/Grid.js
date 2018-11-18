import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';


export default class OBGrid extends React.Component {
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
                <div
                  className="ag-theme-dark"
                 style=                 {{
                  height: '200px',
                  width: '600px'
}}
		            >
                    <AgGridReact
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}
