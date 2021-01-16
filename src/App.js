import './App.css';
import { Component } from 'react';
import { Table } from './Components';

export default class  App  extends Component {
  constructor(props){
    super(props)
    this.state = {
      numCols: 5,
      numRows: 2, 
      cellColor: "b"
    }
  }

  addRow = () => {
    this.setState({ numRows: this.state.numRows + 1})
  }

  addCol = () => {
    this.setState({ numCols: this.state.numCols + 1})
  }

  render(){
    return (
      <div className="App">
        <div className="bar">
          <ul >
            <button class="btn" onClick={this.addCol}> Add Row </button>
            <button class="btn" onClick={this.addRow}> Add Column </button>
            <button class="btn" > Remove Row </button>
            <button class="btn" > Remove Column </button>
            <select class="drop-down"> 
              <option>Blue</option>
              <option>White</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Pink</option>
              <option>Orange</option>
              <option>Purple</option> 
            </select>
          </ul>	
        </div>
        <Table numRows={this.state.numRows} numCols={this.state.numCols}/>
      </div>
    )
  }
}