import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const defaultGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer (gameTurns) {
  let currentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");
    let gameBoard = defaultGameBoard;

  for (const turn of gameTurns) {
    const { box, player } = turn;
    const { row, col } = box;

    gameBoard[row][col] = player;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSymbol
    const secondSymbol
    const thirdSymbol
  }

  function handleSelectBox(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        { box: { row: rowIndex, col: colIndex }, player : currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            defaultName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectBox={handleSelectBox}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
