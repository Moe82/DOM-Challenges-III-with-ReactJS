import './App.css';
import { Component } from 'react';
import { Table } from './Components';

export default class  App  extends Component {
  constructor(props){
    super(props)
    this.state = {
      numCols: 5,
      numRows: 5, 
      colorSelected: ""
    }
  }

  addRow = () => {
    this.setState({ numRows: this.state.numRows + 1})
  }

  addCol = () => {
    this.setState({ numCols: this.state.numCols + 1})
  }

  delCol = () => {
    if (this.state.numCols > 0) 
      this.setState({ numCols: this.state.numCols - 1})
  }

  delRow = () => {
    if (this.state.numRows > 0) 
      this.setState({ numRows: this.state.numRows - 1})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: [event.target.value]})
  }

  render(){
    return (
      <div className="App">
        <div className="bar">
          <ul >
            <button class="btn" onClick={this.addCol}> Add Row </button>
            <button class="btn" onClick={this.addRow}> Add Column </button>
            <button class="btn" onClick={this.delCol}> Remove Row </button>
            <button class="btn" onClick={this.delRow}> Remove Column </button>
            <select class="drop-down" name="colorSelected" onChange={this.handleChange}> 
              <option value="">Select Color</option>
              <option value="#78DCE8">Blue</option>
              <option value="#FFD866">Yellow</option>
              <option value="#A9DC76">Green</option>
              <option value="#FF6188">Pink</option>
              <option value="#FC9867">Orange</option>
              <option value="#AB9DF2">Purple</option> 
            </select>
          </ul>	
        </div>
        <Table numRows={this.state.numRows} numCols={this.state.numCols} colorSelected={this.state.colorSelected}/>
      </div>
    )
  }
}