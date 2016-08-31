import React, { Component } from 'react'
import 'whatwg-fetch'

class Repos extends Component {

  constructor () {
    super()
    this.state = {
      repos: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ repos: data })
        })
    }
  }

  render () {
    const repos = this.state.repos.map((repo) => {
      return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
    })

    return <ul className='Repos'>
      {repos}
    </ul>
  }
}

export default Repos
