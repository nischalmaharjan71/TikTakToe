import Board from "./Board";
import { useState } from "react";

const PLAYER_X="X";
const PLAYER_O="O";

function TikTakToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null)); // Set initial tiles to null for an empty board
    const[playerTurn,setPlayerTurn]=useState(PLAYER_X);
    const handleOnClick=(x)=>{
        
        console.log(x);
    }
    return (
        <div>
            <h1>Tik Tak Toe</h1>
            <Board tiles={tiles} onTitleClick={handleOnClick} />
        </div>
    );
}

export default TikTakToe;
