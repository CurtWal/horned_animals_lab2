import React, { Component } from 'react'
import horn from './HornedBeast.json'
import Animals from './HornedBeast'
export default class Main extends Component {
  render() {
    return (
      <div>
        {horn.horned.map(horned => {
            return(
                <Animals title={horned.title} keyword={horned.keyword} description={horned.description} horns={horned.horns} image_url={horned.image_url} key={horned.id}/>
            )
        })}
      </div>
    )
  }
}
