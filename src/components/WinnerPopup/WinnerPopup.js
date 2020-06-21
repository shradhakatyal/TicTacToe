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
            <p>Player &times; won the game!</p>
            :
            <p>Player &#9675; won the game!</p>
          
        }
        <button type='button' onClick={onClickPlayAgain}>Play Again?</button>
      </div>
    </div>
  );
}

export default WinnerPopup;