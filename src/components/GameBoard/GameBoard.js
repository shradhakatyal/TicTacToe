import React from 'react';

import './GameBoard.scss';

const generateHTMLForCell = (el) => {
  if(el === 'x') {
    return (<span>&times;</span>);
  } else if(el === 'o') {
    return (<span>&#9675;</span>);
  } else {
    return '';
  }
}

const GameBoard = ({ isActive, boardState, onClickCell }) => {
  console.log(boardState, "====board state====");
  return (
    <div className='game-board-area'>
      <div className='game-board'>
        {
          boardState.map((row, rowIndex) => (
            <div className='row' key={rowIndex}>
              {
                row.map((cell, colIndex) => (
                  <div key={`${rowIndex}${colIndex}`}className='cell' onClick={(e) => onClickCell(e, rowIndex, colIndex)}>{generateHTMLForCell(boardState[rowIndex][colIndex])}</div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default GameBoard;
