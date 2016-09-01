import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import Repos from './Repos'
import Bio from './Bio'


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
          <div className="usercontainer">
            <div className="avatar">
              <h1>Darren Clark</h1>
              <div className="userphoto"><Avatar id={this.state.userData.id} /></div>
              <h3>A Peace of Mind Deliverer</h3>
            </div>
            <div className="biorepos">
                <div className="bio"><p>Hi there.</p>I'm Darren. I'm a Designer & Developer in Riverview, Florida.</div>
                <div className="repos">
                <h2>Code Projects_</h2>
                  <Repos url={this.state.userData.repos_url} /></div>
                  <div className="followers">
                    <h2>Git Followers_</h2>
                    <Followers url={this.state.userData.followers_url} /></div>
            </div>
          </div>
        </div>
      </body>
    </div>

  }
}

export default App
