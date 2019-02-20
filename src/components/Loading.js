import React, { Component } from 'react';


class Loading extends Component {
  render() {
    if(this.props.home){
        return (
            <div className="wrapper">
            <a href="https://dplay.se" target="_blank">KLICKA HÄR OM DET LADDAR FÖR EVIGT OCH LADDA SEDAN OM DENNA SIDA</a>
            <div className="loading">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
            </div>
        );
    } else {
        return (
            <div className="loading">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        );
    }
    
  }
}

export default Loading;
