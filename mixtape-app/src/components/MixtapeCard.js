import '../styles/MixtapeCard.css'
import playButton from '../assets/play-button.png'
import trashButton from '../assets/bin-icon.png'

const MixtapeCard = ({ 
    artistName,
    trackName,
    albumArt,
    albumName,
    id,
    userSongs,
    setUserSongs,
    setPlayID
}) => {

    function removeSong() {
        setUserSongs(userSongs.filter((track) => {
            return track.id !== id
        }))
    }

    function handlePlay() {
        console.log(id)
        setPlayID([`spotify:track:${id}`])
    }

    return (
        <div className='track'>
            <img className='user-track-image' src={albumArt.url} alt={albumName} />
         <div className='user-track-text'>
            <h3 className='user-track-name'>{trackName}</h3>
            <p className='user-track-artist'>{artistName}</p>
        </div>      
        <div className='user-track-buttons'>
            <button className="removeButton" onClick={removeSong}><img className='remove-icon' src={trashButton}/></button>
            <button className="playButton" onClick={handlePlay}><img className='play-icon' src={playButton}/></button>
        </div>    
        </div>
    )
}
export default MixtapeCard