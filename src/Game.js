import React from 'react';
import './Game.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component {  
    constructor() {    
        super();    
        this.rows = HEIGHT / CELL_SIZE;    
        this.cols = WIDTH / CELL_SIZE;    
        this.board = this.makeEmptyBoard();  
    }
}

export default Game;