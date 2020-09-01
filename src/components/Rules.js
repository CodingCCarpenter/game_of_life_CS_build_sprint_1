import React from 'react';

import './Rules.css'

class Rules extends React.Component {
    render() {
      return (
        <div className='ruleContainer'>
            <h2>Rules of the Game (Simplified)</h2>
            <ul>
                <li>
                    Any live cell with two live neighbors survives.
                </li>
                <li>
                    Any cell will three live neighbors will be alive in the next generation.
                </li>
                <li>
                    All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                </li>
            </ul>
        </div>
      )
    }
  }

  export default Rules;