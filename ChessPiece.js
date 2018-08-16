
class ChessPiece {
  constructor (color, rank) {
    this.color = color;
    this.rank = rank;
  }

  printPiece () {
    return "${this.rank}${this.color}"
  }

  move () {

  }

  attack () {

  }

  promote () {

  }

}

class Pawn extends ChessPiece {
  constructor (color) {

    this.color = color;

  }
}

export {ChessPiece};
