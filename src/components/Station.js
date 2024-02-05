import React from "react";

const Station = ({ id, name, onClick, clickedStation }) => {
    return(
        <div className={["station-point", clickedStation].join(" ")} onClick={() => {onClick(name)}}>
            <i className="circle"></i>
            <span className="station-name">{name}<i className="deco"></i></span>
        </div>
    )
}

export default React.memo(Station);