import React from "react";

const ArrInfo = ({ station, arrivalMsg, updateTime }) => {
    return(
        <div id="arrInfo">
            <div className="upper">
                <p className="selected-station">{station}</p>
                <p className="time">{updateTime}</p>
            </div>
            <div className="lower">
                <div className="upLine">
                    <p className="direction">상행</p>
                    <p className="message">{arrivalMsg.upLine}</p>
                    <p className="message">{arrivalMsg.upLine2}</p>
                </div>
                <div className="lowerLine">
                <p className="direction">하행</p>
                    <p className="message">{arrivalMsg.downLine}</p>
                    <p className="message">{arrivalMsg.downLine2}</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ArrInfo);