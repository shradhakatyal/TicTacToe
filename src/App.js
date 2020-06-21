import React from 'react';
import './App.css';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import GameBoard from './components/GameBoard/GameBoard';
import WinnerPopup from './components/WinnerPopup/WinnerPopup';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: 'x',
      boardState: [['', '', ''], ['', '', ''], ['', '', '']],
      isCompleted: false,
      winner: null,
    }
  }

  onClickCell = (e, i, j) => {
    if(!this.state.boardState[i][j] && !this.state.isCompleted) {
      this.setState((prevState) => {
        const tempArr = prevState.boardState;
        tempArr[i][j] = prevState.isActive;
        let completed = false;
        if((tempArr[i][0] === prevState.isActive && tempArr[i][1] === prevState.isActive && tempArr[i][2] === prevState.isActive) || (tempArr[0][j] === prevState.isActive && tempArr[1][j] === prevState.isActive && tempArr[2][j] === prevState.isActive) || (i === j && tempArr[0][0] === prevState.isActive && tempArr[1][1] === prevState.isActive && tempArr[2][2] === prevState.isActive) || (((i === 0 && j === 2) || (i === 2 && j === 0)) && tempArr[0][2] === prevState.isActive && tempArr[1][1] === prevState.isActive && tempArr[2][0] === prevState.isActive)) {
          completed = true;
        }
        return {
          boardState: tempArr,
          isActive: prevState.isActive === 'x' ? 'o' : 'x',
          isCompleted: completed,
          winner: prevState.isActive,
        }
      }, () => {
        
      });
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      isActive: 'x',
      boardState: [['', '', ''], ['', '', ''], ['', '', '']],
      isCompleted: false,
      winner: null,
    });
  }

  render() {
    const { isActive, boardState, isCompleted, winner } = this.state;
    return (
      <div className="main-wrapper">
        <h1 className='main-heading'>TIC TAC TOE</h1>
        <PlayerInfo isActive={isActive} />
        <GameBoard isActive={isActive} boardState={boardState} onClickCell={this.onClickCell} />
        {
          isCompleted ? 
            <WinnerPopup winner={winner} onClickPlayAgain={this.onClickPlayAgain} />
          : ''
        }
      </div>
    );
  }
}

export default App;
