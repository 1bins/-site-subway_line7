const Station = ({ id, name, onClick }) => {
    return(
        <div className="station-point" onClick={() => {onClick(name)}}>
            <i className="circle"></i>
            <span className="station-name">{name}</span>
        </div>
    )
}

export default Station;