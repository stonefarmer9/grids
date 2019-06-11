import React, { Component } from 'react';
import './App.css';
import './Challenge1.css';
import './Challenge2.css';
import './Challenge3.css';
import './Challenge4.css'

class App extends Component {
  render(){
  return (
    <div className='App'>
      <div className="Container">
          <div className='One'> One </div>
          <div className='Two'> Two </div>
          <div className='Three'> Three </div>
      </div>
      <div className='Container2'>
        <div className='uno'>One</div>
        <div className='dos'>Two</div>
        <div className='tres'>Three</div>
        <div className='quattro'>Four</div>
      </div>
      <div className='Container3'>
        <div className='A'>One</div>
        <div className='B'>Two</div>
        <div className='C'>Three</div>
        <div className='D'>Four</div>
        <div className='E'>Five</div>
        <div className='F'>Six</div>
      </div>
      <div className='Container4'>
        <div className='fourA'>One</div>
          <div className='fourB'>Two</div>
            <div className='fourC'>Three</div>
              <div className='fourD'>Four</div>
                <div className='fourE'>Five</div>
                  <div className='fourF'>Six</div>
      </div>
    </div>
  );
}
}

export default App;
