const PreviewTrackCard = ({
    artistName,
    trackName,
    albumArt,
    albumName
}) => {
    return (
        <div>
            <img src={albumArt.url} alt={albumName} />
            <h3>{trackName}</h3>
            <p>{artistName}</p>
            <p>{albumName}</p>
        </div>
    )
}

export default PreviewTrackCard