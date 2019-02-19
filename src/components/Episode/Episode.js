import React, { Component } from 'react';
import './Episode.css';
import axios from 'axios';

import Player from '../Player/Player'
// import 'react-hls/src/style.css'; // need to import basic styles
// import 'react-hls/src/icons.css'; 
class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeItems: [],
      streamItems: [],
      isLoaded: false
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    await axios.get(`https://disco-api.dplay.se/content/videos/${params.show}/${params.episodeName}?include=tags,images,show,primaryChannel,primaryChannel.images,contentPackages`, {
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

  }

  render() {
    var {isLoaded, streamItems} = this.state;
       if (!isLoaded) {
      return <div>Laddar...</div>
    } else {
      return (
        <div>
            <Player src={streamItems.attributes.streaming.hls.url}/>
        </div>
      );
    }
    
  }
}

export default Episode;


