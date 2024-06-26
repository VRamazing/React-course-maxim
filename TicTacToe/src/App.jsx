import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
function App() {
  const [playerSymbol, setPlayerSymbol] = useState("X");
  function switchPlayerSymbol(){
    setPlayerSymbol(sym => sym === "X" ? "O" : "X")
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={playerSymbol === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={playerSymbol === "O"} />
        </ol>
        <GameBoard switchPlayerSymbol={switchPlayerSymbol} playerSymbol={playerSymbol} />
      </div>
    </main>
  )
}

export default App
