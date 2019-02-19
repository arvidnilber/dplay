import React, { Component } from 'react';
// import ReactHLS from 'react-hls';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
class Player extends Component {
  startVideo(video) {
      videojs(video)
    };
  render () {
    return (
		<div className="container">
			<div className='player-area'>
				<video ref={this.startVideo} height="100%" width="100%" className="video-js vjs-default-skin" controls>
					<source src={this.props.src} type="application/x-mpegURL" />
				</video>
			</div>
			<a target="_blank" rel="noopener noreferrer" className="waves-effect waves-light" href={'https://chromecast.link#title="'+this.props.title + '"&subtitle=Subtitle&content='+ this.props.src}><div className="button">Chromecast</div></a>
		</div>
    )
  }
}
export default Player;