import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap';
export default class Animals extends Component {
   // start favorite at zero
   constructor(props) {
    super(props);
    this.state = {
        fav: 0,
    }
}
// add 1 to have ever is clicked
handleClicks(){
    this.setState((prevState) =>({
        fav: prevState.fav + 1
    }))
}
    render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}<br></br>
        Amount of horns: {this.props.horns}
        </Card.Text>
        <Button onClick={() => this.handleClicks()} variant="outline-success"> ❤️{this.state.fav} Favotites</Button>
      </Card.Body>
        </Card>
      </div>
    )
  }
}
