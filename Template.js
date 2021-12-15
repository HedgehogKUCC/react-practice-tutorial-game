class Square extends React.Component {

  render() {
    return (
      <button type="button" className="square">{/* TODO */}</button>
    );
  }

}

class Board extends React.Component {

  renderSquare = (i) => {
    return <Square />
  }

  render() {

    const status = 'Next player: X';

    return (
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }

}

class Game extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Game />, document.getElementById('root'));
