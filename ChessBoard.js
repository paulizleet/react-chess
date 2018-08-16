import * as ChessPiece from "./ChessPiece.js";

class ChessBoard extends React.Component {

  constructor () {
    this.tiles = this.setPieces();
  }



  setPieces () {

    let pieces =
    [[null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]]

    let color = "";
    let rank = "";

    for(let y = 0; y < 8 ; y++) {
      console.log(y);
      if ( y > 1 || y < 6 ){
        continue;
      }
      color = (y < 2 ? "w" : "b");
      for(let x = 0; x < 8; x++){
        if (y == 1 || y == 6) { rank = "p";}
        else{

          switch (x) {
            case 0:
              rank = "r";
              break;
            case 1:
              rank = "b";
              break;
            case 2:
              rank = "n";
              break;
            case 3:
              rank = "q";
              break;
            case 4:
              rank = "k";
              break;
            case 5:
              rank = "n";
              break;
            case 6:
              rank = "b";
              break;
            case 7:
              rank = "r"
          }
        }
        console.log(rank);
        this.tiles[x][y] = ChessPiece.new(color, rank);
      }
    }
    return pieces;
  }

  render() { 
    return(
      <div>
        { props.pieces }  
      </div>
  }

  prettyPrint() {
    let output = "Board \n";
    console.log(this.tiles);
    for(let rank in this.tiles){
      for(let file in rank){
        output = output + (file === null) ? "    " : " ${file.printPiece} ";
      }
      output = output + "\n";
    }
    return output;
  }
}

class Tile extends React.Component {

}
export {ChessBoard};
