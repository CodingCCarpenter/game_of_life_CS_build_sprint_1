import React from 'react';
import GameBoard from './containers/GameBoard';
import Rules from './components/Rules'
import './App.css';

const App = () => (
  <div className="App">
    <div className="Main-header">
      <h2>Christine's Game of Life</h2>
    </div>
    <div>
      <GameBoard/>
      <Rules/>
    </div>
  </div>
)

export default App;