import React from 'react';

import Station from './Station';
import { line7 } from '../utils/getLine7'


const Map = ({ station, setStation }) => {
    return(
        <div id="map">
            <div className="line-wrap">
                <div className="line-hz-box">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                    <span className="line line4"></span>
                    <span className="line line5"></span>
                    <span className="line line6"></span>
                    <span className="line line7"></span>
                </div>
                <div className="line-vt-box">
                    <span className="line_vt line1"></span>
                    <span className="line_vt line2"></span>
                    <span className="line_vt line3"></span>
                    <span className="line_vt line4"></span>
                    <span className="line_vt line5"></span>
                    <span className="line_vt line6"></span>
                </div>
            </div>
            <div className="station-lists">
                {line7.map(elem => <Station key={elem.id} {...elem} clickedStation={station === elem.name} onClick={setStation}></Station>)}
            </div>
        </div>
    )
}

export default React.memo(Map);