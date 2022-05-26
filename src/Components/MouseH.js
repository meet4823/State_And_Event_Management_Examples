
import React, { Component } from "react";
class MousePage extends Component {
	state = {
	  img: "https://i.vimeocdn.com/portrait/58832_300x300"
	}
  
	render() {
	  return (
		  <div>
		<p id="event">STATE MANAGEMENT</p>
		<div id="state" >
            <p>1.State changes with onMouseEnter and onMouseOut Events</p>
		  <img
			src={this.state.img}
			onMouseEnter={() => {
			  this.setState({
				img: "http://www.toptipsclub.com/Images/page-img/keep-calm-and-prepare-for-a-test.png"
			  })
			}}
  
			onMouseOut={() => {
			  this.setState({
				img: "https://i.vimeocdn.com/portrait/58832_300x300"
			  })
			}}
		  />
		</div>
		</div>
	  )
	}
  }
  export default MousePage;