import React, { Component } from 'react'
import './index.css'

class Avatar extends Component {

  render () {
    return <div className='Avatar'>
              <img src={`https://avatars.githubusercontent.com/u/${this.props.id}?v=3`} alt="Profile Pic"/>
              </div>
           </div>
  }
}

export default Avatar
