import React, { Component } from 'react'

export default class Footer extends Component {
    constructor() {
      super();
      this.state = {
         title: "Curtrick Walton"
      }
   }

   changeTitle = () => {
      this.setState({
         title: "©" 
        });
   };
  render() {
    return (
      <div onClick={this.changeTitle}>
        {this.state.title}
      </div>
    )
  }
}
