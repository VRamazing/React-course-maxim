import React from 'react';
import { useState } from "react"

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){ 
        setIsEditing((editing) => !editing)
    }
    
    let playerName =  <span className="player-name">{name}</span>
    if(isEditing){
        playerName = <input type="text" value={name}  /> }
    return (
        <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
          </span>

        </li>
    );
}

export default Player;
