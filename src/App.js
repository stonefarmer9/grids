import React from 'react';
import logo from './logo.svg';
import './Challenge1.css';
import './Challenge2.css';
import './Challenge3.css';

function App() {
  return (
    <div className='App'>
      <h2> Challenge 1</h2>
      <div className="Container">
          <div className='One'> One </div>
          <div className='Two'> Two </div>
          <div className='Three'> Three </div>
      </div>
      <br></br>
      <br></br>
      <h3>Challenge 2</h3>
      <div className='Container2'>
        <div className='uno'>One</div>
        <div className='dos'>Two</div>
        <div className='tres'>Three</div>
        <div className='quattro'>Four</div>
      </div>
      <br></br>
      <br></br>
      <h3> Challenge 3</h3>
      <div className='Container3'>
        <div className='A'>One</div>
        <div className='B'>Two</div>
        <div className='C'>Three</div>
        <div className='D'>Four</div>
        <div className='E'>Five</div>
        <div className='F'>Six</div>
      </div>
    </div>
  );
}

export default App;
