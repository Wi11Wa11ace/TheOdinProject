function Game() {
    if(!new.target) {
        throw new Error("Game must be called with 'new'");
    };

    this.gameboard = new Gameboard();
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.currentPlayer = this.player1;

    this.makeMove = (marker, row, col) => {
        if(this.gameboard.board[row][col] === '') {
            this.gameboard.board[row][col] = marker;
            return true; // Move was successful
        }
        return false; // Move failed, cell already occupied
    }

    this.play = () => {
        let row, col;

        while(true) {
            console.log(this.getBoard());
            row = prompt(`Player ${this.currentPlayer.marker}, enter row (0-2):`);
            col = prompt(`Player ${this.currentPlayer.marker}, enter column (0-2):`);

            if(this.makeMove(this.currentPlayer.marker, row, col)) {
                console.log(`Player ${this.currentPlayer.marker} made a move at (${row}, ${col})`);
                if(this.checkForWins(this.currentPlayer.marker)) {
                    console.log(`Player ${this.currentPlayer.marker} wins!`);
                    break;
                }
                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1; // Switch players
            } else {
                console.log("Invalid move, try again.");
            }
        }
    }

    this.getBoard = () => {
        return this.gameboard.getBoard();
    }

    this.checkForWins = (marker) => {
        return this.gameboard.checkForWins(marker);
    }
}

function Gameboard() {
    if(!new.target) {
        throw new Error("Gameboard must be called with 'new'");
    };

    this.board = [['', '', ''], ['', '', ''], ['', '', '']];

    this.getBoard = () => {
        return this.board;
    }

    this.checkForWins = (marker) => {

        for(let i = 0; i < 3; i++) {
            if(this.board[i].every(cell => cell === marker) || 
               this.board.map(row => row[i]).every(cell => cell === marker)) {
                return true;
            }
        }

        if(this.board[0][0] === marker && this.board[1][1] === marker && this.board[2][2] === marker) return true;

        if(this.board[0][2] === marker && this.board[1][1] === marker && this.board[2][0] === marker) return true;
        return false;
    }
};

function Player(marker) {
    if(!new.target) {
        throw new Error("Player must be called with 'new'");
    };

    this.marker = marker;
}

const game = new Game();
game.play();