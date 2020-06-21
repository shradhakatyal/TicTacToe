import React from 'react';
import './App.css';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import GameBoard from './components/GameBoard/GameBoard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: 'x',
      boardState: [['', '', ''], ['', '', ''], ['', '', '']]
    }
  }

  clickOnCell = (e, i, j) => {
    console.log(i, j);
    if(!this.state.boardState[i][j]) {
      console.log('here')
      this.setState((prevState) => {
        const tempArr = prevState.boardState;
        tempArr[i][j] = prevState.isActive;
        console.log(tempArr);
        return {
          boardState: tempArr,
          isActive: prevState.isActive === 'x' ? 'o' : 'x',
        }
      }, () => {
        console.log(this.state.boardState)
      });
    }
  }

  render() {
    const { isActive, boardState } = this.state;
    return (
      <div className="main-wrapper">
        <h1 className='main-heading'>TIC TAC TOE</h1>
        <PlayerInfo isActive={isActive} />
        <GameBoard isActive={isActive} boardState={boardState} clickOnCell={this.clickOnCell} />
      </div>
    );
  }
}

export default App;
