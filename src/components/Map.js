import Station from './Station';
import { line7 } from '../utils/getLine7'


const Map = ({ setStation }) => {
    return(
        <div id="map">
            {line7.map(elem => <Station key={elem.id} {...elem} onClick={setStation}></Station>)}
        </div>
    )
}

export default Map;