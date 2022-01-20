import { useState } from "react"
import '../styles/SongCard.css'
import playButton from '../assets/play-button.png'
import addButton from '../assets/add-button.png'

const SongCard = ({
    artist_name,
    track_name,
    album_art,
    album_art_bigger,
    album_name,
    track_id,
    userSongs,
    setUserSongs,
    setPlayID
}) => {
    function takeSong() {
        setUserSongs([...userSongs, {
            trackName: track_name,
            artistName: artist_name,
            albumArt: album_art_bigger,
            albumName: album_name,
            id: track_id
        }])
    }

    function handlePlay() {
        console.log(track_id)
        setPlayID([`spotify:track:${track_id}`])
    }

    return (
        <div className='song-card'>
            <div className='track-image'>
                <img src={album_art.url} alt={album_name} />
                {
                    (userSongs.some((track) => { return track.id === track_id })) ? (<p>Added!</p>) :
                        (<button className='add-button' onClick={takeSong}><img className='add-icon' src={addButton}/></button>)
                }
            </div>
            <div className='track-text'>
                <h3 className='song-name'>{track_name}</h3>
                <p className='artist-name'>{artist_name}</p>
                <p className='album-name'>{album_name}</p>
            </div>
            <div className='track-play-button'>
            <button className='play-button' onClick={handlePlay}><img className='play-icon' src={playButton}/></button>
            </div>
        </div>
    )
}
export default SongCard