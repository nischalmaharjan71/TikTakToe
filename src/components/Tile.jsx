function Tile({className},{value}){
    console.log("tiles int he Tile",{value});
    debugger
    return (
            <div className={`tile ${className}`}>
                {value}
            </div>
    );
}

export default Tile;