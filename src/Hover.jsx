import React, { Component } from 'react'
import NewComponent from './NewComponent';
 class Hover extends Component {
   
  render() {
    return (
      <div>
        <h5 onMouseOver={this.props.changeMarks}>On hover marks changes {this.props.count}</h5>
      
      </div>
    )
  }
}
export default NewComponent(Hover);