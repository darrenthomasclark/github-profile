import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import Repos from './Repos'
// import Bio from './Bio'


import 'whatwg-fetch'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'darrenthomasclark',
      userData: {}
    }
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }

  render () {
    return <div className='App'>
      <body>
        <div className="user">
        <h1>Darren Clark</h1>
          <div className="usercontainer">
            <div className="avatar"><Avatar id={this.state.userData.id} /></div>
            <div className="biorepos">
                <h2>Bio</h2>
                <div className="bio">Designer & Developer based out of Tampa, Florida.</div>
                <div className="repos">
                <h2>Repos</h2>
                  <Repos url={this.state.userData.repos_url} /></div>
            </div>
            <div className="followers">
              <h2>Followers</h2>
              <Followers url={this.state.userData.followers_url} /></div>
          </div>
        </div>
      </body>
    </div>

  }
}

export default App
