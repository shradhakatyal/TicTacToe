import React from 'react';

import './GameBoard.scss';

const GameBoard = ({ isActive, boardState, clickOnCell }) => {
  console.log(boardState, "====board state====");
  return (
    <div className='game-board-area'>
      <div className='game-board'>
        <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 0)}>{boardState[0][0]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 1)}>{boardState[0][1]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 0, 2)}>{boardState[0][2]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 0)}>{boardState[1][0]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 1)}>{boardState[1][1]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 1, 2)}>{boardState[1][2]}</div>
        </div>
        <div className='row'>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 0)}>{boardState[2][0]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 1)}>{boardState[2][1]}</div>
          <div className='cell' onClick={(e) => clickOnCell(e, 2, 2)}>{boardState[2][2]}</div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;