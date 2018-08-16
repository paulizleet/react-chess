import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import App from './App.js';
import './App.css';

//import * as Game from "./ChessBoard.js";
//console.log(board)
class Chess extends Component{

  constructor () {
   // don't need this // this.board = new Game.ChessBoard;
    super();
    this.turn = 1;
    this.moveHistory = [];
    this.pieces = this.setPieces();

  }

  setPieces() {

    let pieces = new Map();
    let alphabet = "abcdefgh";
    let pieceFiles = "rbnqknbr";
    for(let y = 0; y < 8 ; y++) {
      if ( y > 1 && y < 6 ){
        continue;
      }
      let color = (y < 2 ? "w" : "b");
      let pce = ""
      for(let x = 0; x < 8; x++){
        if(y == 1 || y == 6){
          pce = "p"          
        } else {
          pce = pieceFiles[x]
        }
        pieces.set(alphabet[x]+y,color+pce);
      }
    }
    return pieces;
  }

  play () {
    console.log("Now playing chess");
    console.log(this.printBoard());
  }

  printBoard () {
    return this.board.prettyPrint();
  }

  render() {
    return (
      <div>
        <Board className="board" pieces = {this.pieces} />
      </div>
    );
  }
}

class Board extends React.Component {

  //state = {pieces: this.props.pieces}

  makeBoard(){
    let board = [];
    let alphabet = "abcdefgh";
   // console.log(pieces)
    for(let x = 0; x < 8; x++){
      let row = [];
      for(let y = 0; y < 8; y++){
        row.push( <Tile coors={[y,x]} piece={this.props.pieces.get(alphabet[y]+x)} /> );
      }
      board.push(<tr>{row}</tr>)
    }
    return board
  }

  render(){
    return(
    <div>
      <table>
        {this.makeBoard()}
      </table>
    </div>
    );
  }
}

class Tile extends React.Component {

  getColor(){
    return(((this.props.coors[0] % 2) + (this.props.coors[1] % 2)) % 2 == 0 ? "white" : "black");
  }

  render(){
    let cssClass = "chess-tile " + this.getColor(this.props.coors);
    return (
     <td class={cssClass} > {this.props.piece != undefined ? <Piece piece={this.props.piece} /> : ""}</td>
    );    
  }

}

const Piece = (props) => {
    switch (props.piece){
      case "br": return "♜";
      case "bb": return "♝";
      case "bn": return "♞";
      case "bq": return "♛";
      case "bk": return "♚";
      case "bp": return "♟";
      case "wr": return "♖";
      case "wb": return "♗";
      case "wn": return "♘";
      case "wq": return "♕";
      case "wk": return "♔";
      case "wp": return "♙";
    }
}

ReactDOM.render(
  //<App game={<Chess />} />, 
  <Chess />,
  document.getElementById('root')
);
