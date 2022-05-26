
import React, { Component } from "react";

// Import your audio file
import song from "./lyz.mp3";

class SongPage extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div id="state">
        <p>3. State of a song changes with onClick event</p>
        {/* Show state of song on website */}
        <p id="st">
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>
          Play         |         Pause
        </button>
      </div>
    );
  }
}

export default SongPage;
