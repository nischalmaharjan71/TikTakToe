function Tile({className,value,onClick}){
    console.log("tiles int he Tile",{value});
    
    return (
            <div onClick={onClick} className={`tile ${className}`}>
                {value}
            </div>
    );
}

export default Tile;