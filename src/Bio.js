import React, { Component } from 'react'

class Bio extends Component {
render () {

  return <div className='Bio'>
    <h2><a href={this.props.blog}>{this.props.blog}</a></h2>
      <p>{this.props.bio}</p>
        </div>
}
}
export default Bio
