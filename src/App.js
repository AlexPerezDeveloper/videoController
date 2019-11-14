import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {



  handleOnClick = (event) => {
    if (event.target.paused) {
      event.target.play();
    } else {
      event.target.pause();
    }
/*
    let repr = event.target.previousSibling;

    alert(repr);
    if (repr.paused == true) {
      repr.play();
    } else {
      repr.pause();
    }*/
  };

  handleOnClickMute = (event) => {
    let vid = event.target.previousSibling;
    if (vid.muted == true) {
      vid.muted = false;
      event.target.classList.remove('removeMute');
    } else {
      vid.muted = true;
      event.target.classList.add('removeMute');
    }
  };

  handleOnClickMuteAll = (event) => {
    let x, i;
    x = document.querySelectorAll("video");
    for (i = 0; i < x.length; i++) {
      x[i].muted  = true;
    }

  };


  render() {
    return (
      <div className="App">
        <div class="container">
          <h3 class="text-center">Video Controller</h3>

          <div class="video-content">
            <div class="row justify-content-center">

              <div class="col-12 col-md-4" id="video1">

              <video id="videoC" onClick={this.handleOnClick}>
                  <source src={process.env.PUBLIC_URL + '/assets/video/video1.mp4'} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </video>

              <div class="mute" onClick={this.handleOnClickMute}></div>
              </div>

              <div class="col-12 col-md-4" id="video2">
                <video id="videoC" onClick={this.handleOnClick}>
                  <source src={process.env.PUBLIC_URL + '/assets/video/video2.mp4'} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </video>
                <div class="mute" onClick={this.handleOnClickMute}></div>
              </div>

            </div>

            <div class="muteAll"><a  onClick={this.handleOnClickMuteAll}><i class="fa fa-volume-up"></i></a></div>

          </div>
        </div>
      </div>
    );
  }
} export default App;
