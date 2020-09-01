import React from 'react';
import { Settings, Controls } from '.';
import './Board.css';

const Board = (props) => (
    <div>
        <canvas id="canvas" 
            width={props.width * 10} 
            height={props.height * 10} 
            onClick={props.onClick}>
        </canvas>
        <Controls
            interval={props.interval}
            generation={props.generation}
            onPause={props.onPause}
            onSettings={props.onSettings}/>
        <Settings
            showSettings={props.showSettings}
            speed={props.speed}
            widthToSet={props.widthToSet}
            btnDisabled={props.interval}
            heightToSet={props.heightToSet}
            onHeightUpdate={props.onHeightUpdate}
            onWidthUpdate={props.onWidthUpdate}
            onGenerate={props.onGenerate}
            onSpeedUpdate={props.onSpeedUpdate}
            onClear={props.onClear}
        />

    </div>
)

export default Board;