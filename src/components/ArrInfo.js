import React from "react";
import { line7 } from "../utils/getLine7";

const ArrInfo = ({ station, arrivalMsg, updateTime, getSubway, setStation }) => {
    const thisStationId = line7.filter(elem => elem.name === station)[0].id;
    const prevStationId = thisStationId + 1;
    const nextStationId = thisStationId - 1;
    let prevStation;
    let nextStation;
    prevStationId < line7.length ? prevStation = line7.filter(elem => elem.id === prevStationId) : prevStation = null;
    nextStationId >= 1  ? nextStation = line7.filter(elem => elem.id === nextStationId) : nextStation = null;

    return(
        <div id="arrInfo">
            <div className="upper">
                <div className="stations">
                    <p className="prev-station" onClick={() => {setStation(prevStation[0].name)}}>{prevStation && `< ${prevStation[0].name}`}</p>
                    <p className="this-station">{station}</p>
                    <p className="next-station" onClick={() => {setStation(nextStation[0].name)}}>{nextStation && `${nextStation[0].name} >`}</p>
                </div>
                <div className="time-wrap">
                    <p className="time">업데이트 시간: {updateTime}</p>
                    <button type="button" className="btn-reload" onClick={() => {getSubway(station)}}>새로고침</button>
                </div>
            </div>
            <div className="lower">
                <div className="upLine">
                    <p className="direction">상행</p>
                    <p className="message">{arrivalMsg.upLine ? arrivalMsg.upLine : '도착 예정 정보가 없습니다'}</p>
                    <p className="message">{arrivalMsg.upLine2 ? arrivalMsg.upLine2 : '도착 예정 정보가 없습니다'}</p>
                </div>
                <div className="donwLine">
                    <p className="direction">하행</p>
                    <p className="message">{arrivalMsg.downLine ? arrivalMsg.downLine : '도착 예정 정보가 없습니다'}</p>
                    <p className="message">{arrivalMsg.downLine2 ? arrivalMsg.downLine2 : '도착 예정 정보가 없습니다'}</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ArrInfo);