import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
// 10:28
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: ""
        }
      }
      colorChange = (e) => {
        this.setState({
          bgColor: "steelblue"
        })
      }
  render() {
    return (
      <div>
        <h2 style={{backgroundColor: this.state.bgColor}}
           onClick={this.colorChange}>Horned Beast</h2>
        <nav>
        <Button href="#" variant="secondary">About</Button>
        <Button href="#" >Images</Button>
        <Button href="#" variant="danger">Contact</Button>
        </nav>
      </div>
    )
  }
}
