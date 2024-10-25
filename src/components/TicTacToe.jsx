import Board from "./Board";
import { useState } from "react";

function TikTakToe() {
    const [tiles, setTiles] = useState(Array(9).fill("xy")); // Set initial tiles to null for an empty board
    const[toy,setToy]=useState("CAR");
    debugger
    console.log("tile",tiles)
    return (
        <div>
            <h1>Tik Tak Toe</h1>
            <Board tiles={tiles} />
        </div>
    );
}

export default TikTakToe;
