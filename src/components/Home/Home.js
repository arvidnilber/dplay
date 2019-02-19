import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Poster from '../Poster';
import Header from '../Header/Header';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOl: [],
      isLoaded: false,
      posterUrl: [],

    }
  }

  async componentDidMount() {
    await axios.get(`https://disco-api.dplay.se/content/shows?include=genres,images,primaryChannel.images,contentPackages&page[size]=100&page[number]=1&sort=views.lastMonth`, {
        headers: {
            Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
    .then(res => {
      const items = res.data;
      this.setState({ 
          itemsOl:items.data,
          isLoaded:true
        });
    })
  
    // for (i = 0; i < this.state.itemsOl.length; i++) { 
    //   await axios.get(`https://disco-api.dplay.se/content/shows/${this.state.itemsOl[i].attributes.alternateId}?include=images`, {
    //   headers: {
    //       Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
    //   },
    //   withCredentials: true
    // })
    // .then(res => {
    //   const image = res.data.included[0].attributes.src
    //   this.setState({
    //     posterUrl: image
    //   })
    // })    
    // }    
  }
  render() {
    var {isLoaded, itemsOl} = this.state;
    if (!isLoaded) {
      return <div>Laddar</div>
    } else {
      return (
        <div className="movie">
          { itemsOl.map((item) =>
                    <a href={'/' + item.attributes.alternateId} className="waves-effect waves-light">
                        {/* <img src="https://svgur.com/i/BGc.svg" alt={item.attributes.alternateId}></img> */}
                        <Poster title={item.attributes.name}></Poster>
                        <p>{item.attributes.name}</p>
                    </a>

          )}
        </div>
      );
    }
    
  }
}

export default Home;
