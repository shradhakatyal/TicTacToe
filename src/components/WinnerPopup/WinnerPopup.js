import React from 'react';

import './WinnerPopup.scss';

const WinnerPopup = ({ winner, onClickPlayAgain }) => {
  return (
    <div className='popup-overlay'>
      <div className='winner-popup'>
        <h1>Game Over</h1>
        {
          !winner ? 
          <p>The game was a tie!</p>
          : 
            winner === 'x' ? 
            <p>Player <span className='fa fa-times'></span> won the game!</p>
            :
            <p>Player <span className='fa fa-circle-o'></span> won the game!</p>
          
        }
        <button type='button' onClick={onClickPlayAgain}>Play Again?</button>
      </div>
    </div>
  );
}

export default WinnerPopup;