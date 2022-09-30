import React, { Component } from 'react'
import NewComponent from './NewComponent'
 class ButtonClick extends Component {
   
  render() {
    return (
      <div>
        <h4>button click</h4>
        <button onClick={this.props.changeMarks}>Click  times {this.props.count}</button>
      </div>
    )
  }
}
export default NewComponent(ButtonClick);