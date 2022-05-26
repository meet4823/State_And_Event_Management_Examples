import React, { Component } from 'react';
import Mous from './Components/MouseH';

import SongPage from './Components/Play';
import ClickPage from './Components/Click';
import StatePage from './Components/State';

import NavPage from './Components/NavPage';
class App extends Component
{

  render()
  {
    return (
      
      <div>
		  <ClickPage/>
		  <Mous/>
		  <StatePage/>
		  <SongPage/> 
	  </div>
    );
  }
}

     

export default App;