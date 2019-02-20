import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`https://disco-api.dplay.se/content/shows?include=genres,images,primaryChannel.images,contentPackages&page[size]=12&query=${this.state.query}&sort=views.lastMonth`, {
        headers: {
            Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    var {results} = this.state
    if(results.length < 0) {
        return (
            <form>
                <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
            {/* <Suggestions results={this.state.results} /> */}
            </form>
        )
    } else {
        return(
            <form className="form">
                <input
                    id="search-bar"
                    placeholder="Sök här..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    } 
  }
}

export default Search