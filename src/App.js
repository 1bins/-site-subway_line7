import { useEffect, useState } from 'react';
import './App.css';
import './assets/subway.css';

import Map from './components/Map'
import ArrInfo from './components/ArrInfo';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [station, setStation] = useState('석남');
  const [updateTime, setUpdateTime] = useState();
  const [arrivalMsg, setArrivalMsg] = useState({
    upLine: null,
    upLine2: null,
    downLine: null,
    downLine2: null
  })

  const getSubway = async (station) => {
    const url = await fetch(`http://swopenapi.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/10/${station}`);
    const urlJson = await url.json();
    //6675544a4a7377623631756a515863

    let detailSubway = urlJson.realtimeArrivalList;
    let lineNumb = detailSubway.filter(elem => elem.subwayId === '1007');

    let upLine = lineNumb.filter(elem => elem.updnLine === '상행');
    let downLine = lineNumb.filter(elem => elem.updnLine === '하행');

    setArrivalMsg({
      upLine: upLine[0] && upLine[0].arvlMsg2,
      upLine2: upLine[1] && upLine[1].arvlMsg2,
      downLine: downLine[0] && downLine[0].arvlMsg2,
      downLine2: downLine[1] && downLine[1].arvlMsg2,
    });
    
    setUpdateTime((upLine[0].recptnDt).substr(11))
  }

  // station 바꾸면 실행될 함수
  useEffect(() => {

    getSubway(station);

  }, [station, API_KEY])
  

  return (
    <div className="App">
      <h1>지하철 알림이</h1>
      <Map station={station} setStation={setStation}></Map>
      <ArrInfo station={station} arrivalMsg={arrivalMsg} updateTime={updateTime} setStation={setStation} getSubway={getSubway}></ArrInfo>
    </div>
  );
}

export default App;
