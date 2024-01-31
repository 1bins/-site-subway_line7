import { useEffect, useRef, useState } from 'react';
import './App.css';
import './assets/subway.css';

import Map from './components/Map'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [station, setStation] = useState('석남');

  const intervalRef = useRef(null);

  // station 바꾸면 실행될 함수
  useEffect(() => {
    
    const getSubway = async (station) => {
      const url = await fetch(`http://swopenapi.seoul.go.kr/api/subway/6675544a4a7377623631756a515863/json/realtimeStationArrival/0/10/${station}`);
      const urlJson = await url.json();
  
      let detailSubway = urlJson.realtimeArrivalList;
      let lineNumb = detailSubway.filter(elem => elem.subwayId === '1007');

      let upLine = lineNumb.filter(elem => elem.updnLine === '상행');
      let downLine = lineNumb.filter(elem => elem.updnLine === '하행');

      console.log(upLine)
    }
    
    getSubway('가산디지털단지');

  }, [station, API_KEY])

  return (
    <div className="App">
      <Map setStation={setStation}></Map>
    </div>
  );
}

export default App;
