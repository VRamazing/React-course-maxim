import { useState } from "react";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({switchPlayerSymbol, playerSymbol}){
    const [currentBoard, setCurrentBoard] = useState(INITIAL_GAME_BOARD);


    function updateCurrentBoard(rowIndex, colIndex){
        setCurrentBoard((board) => {
            let initialBoard = [...board.map((b) => [...b])];
            initialBoard[rowIndex][colIndex] = playerSymbol;
            return initialBoard;
        });
        console.log(playerSymbol)
        switchPlayerSymbol();
    }

    return (
        <ol id="game-board">
            {currentBoard.map((row, rowIndex) => (
                 <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => 
                            (
                                <li key={colIndex}>
                                    <button onClick={() => updateCurrentBoard(rowIndex, colIndex)}>{col}</button>
                                </li>
                            )
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}