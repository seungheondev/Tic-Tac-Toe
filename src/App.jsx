import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectBox() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player defaultName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player defaultName="Player2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectBox={handleSelectBox} activePlayerSymbol={activePlayer}/>
      </div>
      log
    </main>
  );
}

export default App;
