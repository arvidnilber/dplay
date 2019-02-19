import React, { Component } from 'react';
import ReactHLS from 'react-hls';

class Player extends Component {
  render () {
    return (
      <div className='player'>
           <ReactHLS url={this.props.src} controls autoplay={true} width="90%" height="90%"/>
      </div>
    )
  }
}
export default Player;