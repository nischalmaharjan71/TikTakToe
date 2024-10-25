import Tile from "./Tile";
import Strike from "./Strike";

function Board({tiles})
{
    debugger
    console.log("tiles in the board ",tiles)
    return(
            <div className="board">
               <Tile value={tiles[0]} className="right-border bottom-border"/>
               <Tile value={tiles[1]} className="right-border bottom-border"/>
               <Tile value={tiles[2]} className=" bottom-border"/>
               <Tile value={tiles[3]} className="right-border bottom-border"/>
               <Tile value={tiles[4]} className="right-border bottom-border"/>
               <Tile value={tiles[5]} className="bottom-border"/>
               <Tile value={tiles[6]} className="right-border "/>
               <Tile value={tiles[7]} className="right-border "/>
               <Tile value={tiles[8]} className=""/>
              
               {/* <Strike/> */}
            </div>
    );
}


export default Board;