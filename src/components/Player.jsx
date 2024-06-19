import { useState } from "react";

export default function Player({ defaultName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(defaultName);
  const [editing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((edit) => !edit);

    if (editing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (editing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editing ? "保存" : "修正"}</button>
    </li>
  );
}
