import React, { Component } from 'react';
import './Show.css';
import axios from 'axios';
import Poster from '../Poster'
import Header from '../Header/Header';
import Loading from '../Loading'

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      episodes:[],
      isLoaded: false
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;

    await axios.get(`https://disco-api.dplay.se/content/shows/${params.showName}`, {
      headers: {
          Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
      },
      withCredentials: true
  })
  .then(res => {
    const items = res.data;
    this.setState({ 
        showData:items.data,
        isLoaded:true
      });
  })
  await axios.get(`https://disco-api.dplay.se/content/videos?decorators=viewingHistory&filter[videoType]=EPISODE,LIVE,FOLLOW_UP&filter[show.id]=${this.state.showData.id}&page[size]=100&sort=-seasonNumber,-episodeNumber,earliestPlayableStart`, {
        headers: {
            Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
    .then(res => {
      const items = res.data;
      this.setState({ 
          episodes:items.data,
          isLoaded:true
        });
    })

    document.title = this.state.showData.attributes.name

  }

  render() {
    var {isLoaded, episodes, showData} = this.state;
    if (!isLoaded) {
      return <Loading/>
    } else {
      return (
        <div className="container">
           <Header/>
		   <div className="info">
				<h3>{showData.attributes.name}</h3>
				<h4>{showData.attributes.description}</h4>
		   </div>
			<div className="movie">
			{ episodes.map((item) => 
						<a href={'/' + item.attributes.path} className="waves-effect waves-light" key={item.id}>
						<Poster title={item.attributes.name}></Poster>
						<p>{item.attributes.name}</p>
						<p> Säsong {item.attributes.seasonNumber} avsnitt {item.attributes.episodeNumber}</p>
						</a>
				)}
			</div>
        </div>
      );
    }
    
  }
}

export default Show;


