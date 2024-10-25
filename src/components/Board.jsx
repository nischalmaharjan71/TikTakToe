import Tile from "./Tile";
import Strike from "./Strike";

function Board({tiles,onTitleClick})
{
    return(
            <div className="board">
               <Tile onClick={()=>onTitleClick(0)} value={tiles[0]} className="right-border bottom-border"/>
               <Tile onClick={()=>onTitleClick(1)} value={tiles[1]} className="right-border bottom-border"/>
               <Tile onClick={()=>onTitleClick(2)} value={tiles[2]} className=" bottom-border"/>
               <Tile onClick={()=>onTitleClick(3)} value={tiles[3]} className="right-border bottom-border"/>
               <Tile onClick={()=>onTitleClick(4)} value={tiles[4]} className="right-border bottom-border"/>
               <Tile onClick={()=>onTitleClick(5)} value={tiles[5]} className="bottom-border"/>
               <Tile onClick={()=>onTitleClick(6)} value={tiles[6]} className="right-border "/>
               <Tile onClick={()=>onTitleClick(7)} value={tiles[7]} className="right-border "/>
               <Tile onClick={()=>onTitleClick(8)} value={tiles[8]} className=""/>
              
               {/* <Strike/> */}
            </div>
    );
}


export default Board;