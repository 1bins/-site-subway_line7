import Station from './Station';
import { line7 } from '../utils/getLine7'


const Map = ({ station, setStation }) => {
    return(
        <div id="map">
            {line7.map(elem => <Station key={elem.id} {...elem} clickedStation={station === elem.name} onClick={setStation}></Station>)}
        </div>
    )
}

export default Map;