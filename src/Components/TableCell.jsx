import { Component } from 'react';
import "../App.css"

export default class TableCell extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      colorSelected: ""
    }
  }
  handleClick = () => {
    this.setState({colorSelected:this.props.colorSelected })
    
  }
  render(){
    return (
      <div className="cell" style={{backgroundColor: this.state.colorSelected}} onClick={this.handleClick}>
      </div>
    )
  }
}
