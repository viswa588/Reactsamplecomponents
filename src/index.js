import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './shopingList/shopingList';
import UserDetails from './shopingList/UserDetails';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			value:null,
		};
	}
	clickEvent() {
		let { value } = this.state;
		value = value && value < 9 ? value + 1 : 1;
		this.setState({ value });
	}
  render() {
    return (
      <button className="square"
	   onClick={() => this.clickEvent()} onMouseOver={() => this.clickEvent()} >
        { this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			squares: Array(9).fill(null),
		};
	}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
	resetSquare() {
		this.setState({ squares: Array(9).fill(null) });
	}

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status" onClick={() => this.resetSquare()}>{status}</div>
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
      </div>
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
          <div></div>
          <ol>{/* TODO */}</ol>
        </div>

				<div> <UserDetails /> <button> + Add filed </button ></div>
					<div className="user-details-styles">
						<div className="user-fields"><ShoppingList editable labelName="user-field-label" Name="viswanath" initialValue="enter fullName"/></div>
						<div className="user-fields"><ShoppingList editable={false} labelName="user-field-label" Name="Gopal" initialValue="He is from UI"/></div>
						<div className="user-fields"><ShoppingList  editable labelName="user-field-label" Name="Santosh" initialValue="enter your aadhar Number"/></div>
						<div className="user-fields"><ShoppingList editable labelName="user-field-label" Name="Sunil" initialValue="He is from HR dept"/></div>
					</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
