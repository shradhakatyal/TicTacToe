import React from 'react';

import './PlayerInfo.scss';

const PlayerInfo = ({ isActive }) => (
  <div className='players'>
    <div className={`player-item ${isActive === 'x' ? 'active' : ''}`}><span className='fa fa-times'></span></div>
    <div className={`player-item ${isActive === 'o' ? 'active' : ''}`}><span className='fa fa-circle-o'></span></div>
    <p className='active-player-text'>Next Move - {isActive === 'x' ? <span className='fa fa-times'></span> : <span className='fa fa-circle-o'></span>}</p>
  </div>
);

export default PlayerInfo;