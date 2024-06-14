const defaultGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectBox, turns }) {
  let gameBoard = defaultGameBoard;

  for (const turn of turns) {
    const { box, player } = turn;
    const { row, col } = box;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(defaultGameBoard);

  // function handleSelectBox(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map(innerArray => [...innerArray])
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectBox();

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectBox(rowIndex, colIndex)} disabled={col !== null}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
