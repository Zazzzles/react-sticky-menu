import React, { Component } from 'react';
import './App.css';
import StickyMenu from './components/StickyMenu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='cover'>
            <h1>This is a landing page</h1>
        </div>

        <StickyMenu>
          <div className='header'>
            <h1>This is a sticky menu</h1>
          </div>
        </StickyMenu>
       

        <div className='about'> 
          <h1>This is a about section</h1>
        </div>

        <div className='contact'> 
          <h1>This is a contact section</h1>
        </div>

      </div>
    );
  }
}

export default App;
