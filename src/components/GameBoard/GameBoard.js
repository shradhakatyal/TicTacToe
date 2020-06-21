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

{/* <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 0)}>{boardState[0][0] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 1)}>{boardState[0][1] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 2)}>{boardState[0][2] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 0)}>{boardState[1][0] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 1)}>{boardState[1][1] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 2)}>{boardState[1][2] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 0)}>{boardState[2][0] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 1)}>{boardState[2][1] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 2)}>{boardState[2][2] === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</div>
        </div> */}