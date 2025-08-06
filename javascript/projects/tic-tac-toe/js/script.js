class Game {

    constructor() {
        if(!new.target) {
            throw new Error("Game must be called with 'new'");
        };
        this.gameboard = new Gameboard();
        this.player1 = new Player('X');
        this.player2 = new Player('O');
        this.currentPlayer = this.player1;
    }

    makeMove = (marker, row, col) => {
        let currentBoard = this.gameboard.getBoard();
        if(currentBoard[row][col] === '') {
            this.gameboard.setBoard(row, col, marker);
            return true; // Move was successful
        }
        return false; // Move failed, cell already occupied
    }

    play = () => {
        let row, col;

        while(true) {
            console.log(this.getBoard());
            row = prompt(`Player ${this.currentPlayer.marker}, enter row (0-2):`);
            col = prompt(`Player ${this.currentPlayer.marker}, enter column (0-2):`);

            if(this.makeMove(this.currentPlayer.marker, row, col)) {
                console.log(`Player ${this.currentPlayer.marker} made a move at (${row}, ${col})`);
                if(this.checkForWins(this.currentPlayer.marker)) {
                    console.log(`Player ${this.currentPlayer.marker} wins!`);
                    this.reset();
                    break;
                }
                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1; // Switch players
            } else {
                console.log("Invalid move, try again.");
            }
        }
    }

    getBoard = () => {
        return this.gameboard.getBoard();
    }

    checkForWins = (marker) => {
        return this.gameboard.checkForWins(marker);
    }

    draw = () => {
        const gameContainer = document.querySelector('.game-container');

        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => {
                    if(this.makeMove(this.currentPlayer.marker, i, j)) {
                        cell.textContent = this.currentPlayer.marker;
                        if(this.checkForWins(this.currentPlayer.marker)) {
                            alert(`Player ${this.currentPlayer.marker} wins!`);
                            this.reset();
                        } else {
                            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1; // Switch players
                        }
                    } else {
                        alert("Invalid move, try again.");
                    }
                });
                gameContainer.appendChild(cell);
            }
        }
    }

    reset = () => {
        this.gameboard = new Gameboard();
        this.currentPlayer = this.player1;
        const gameContainer = document.querySelector('.game-container');
        gameContainer.innerHTML = ''; // Clear the game board
        this.draw(); // Redraw the game board
        console.log("Game has been reset.");
    }
}

class Gameboard {

    constructor() {
        if(!new.target) {
            throw new Error("Gameboard must be called with 'new'");
        };

        this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    }

    getBoard = () => {
        return this.board;
    }

    setBoard = (row, col, marker) => {
        this.board[row][col] = marker;
    }

    checkForWins = (marker) => {

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

class Player {
    constructor(marker) {
        if(!new.target) {
            throw new Error("Player must be called with 'new'");
        };

        this.marker = marker;
    }
}

const game = new Game();

game.draw();