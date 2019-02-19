import React, { Component } from 'react';


class Poster extends Component {
  render() {
    return (
            <div className="poster">
                <p>{this.props.title}</p>
            </div>
        );
  }
}

export default Poster;
