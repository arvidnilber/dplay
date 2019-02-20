import React, { Component } from 'react';
import './Episode.css';
import axios from 'axios';
import Header from '../Header/Header';
import Loading from '../Loading'
import Player from '../Player/Player'
// import 'react-hls/src/style.css'; // need to import basic styles
// import 'react-hls/src/icons.css'; 
class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeItems: [],
      streamItems: [],
      isLoaded: false,
      showName:[]
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    await axios.get(`https://disco-api.dplay.se/content/videos/${params.show}/${params.episodeName}`, {
        headers: {
          Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
    .then(res => {
      const episodeData = res.data;
        this.setState({ 
            episodeItems:episodeData.data
        });
    })
    await axios.get(`https://disco-api.dplay.se/playback/videoPlaybackInfo/${this.state.episodeItems.id}?usePreAuth=true`, {
        headers: {
            Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
    .then(res => {
      const streamData = res.data;
      this.setState({ 
          streamItems:streamData.data,
          isLoaded:true
        });
    })

    await axios.get(` https://disco-api.dplay.se/content/shows/${params.show}`, {
        headers: {
            Cookie: "st=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E"
        },
        withCredentials: true
    })
    .then(res => {
      const showData = res.data;
      this.setState({ 
          showName:showData.data.attributes.name,
          isLoaded:true
        });
    })
    const name = this.state.showName
    document.title = name + ': Avsnitt ' + this.state.episodeItems.attributes.episodeNumber + ' - Säsong ' + this.state.episodeItems.attributes.seasonNumber 
  }

  render() {
    var {isLoaded, streamItems, episodeItems} = this.state;
       if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div className="container">
            <Header></Header>
            <Player src={streamItems.attributes.streaming.hls.url} title={episodeItems.attributes.name}/>
            <div className="episode-info">
                <h3>{episodeItems.attributes.name}</h3>
                <p>{episodeItems.attributes.description}</p>
                <h4>Avsnitt {episodeItems.attributes.episodeNumber} på säsong {episodeItems.attributes.seasonNumber}</h4>
            </div>
        </div>
      );
    }
    
  }
}

export default Episode;


