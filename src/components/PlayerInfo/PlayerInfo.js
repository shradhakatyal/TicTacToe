import React from 'react';

import './PlayerInfo.scss';

const PlayerInfo = ({ isActive }) => (
  <div className='players'>
    <div className={`player-item ${isActive === 'x' ? 'active' : ''}`}>&times;</div>
    <div className={`player-item ${isActive === 'o' ? 'active' : ''}`}>&#9675;</div>
    <p className='active-player-text'>Next Move - {isActive === 'x' ? <span>&times;</span> : <span>&#9675;</span>}</p>
  </div>
);

export default PlayerInfo;