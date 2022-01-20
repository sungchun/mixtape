import { useState, useEffect } from "react"
import SpotifyWebPlayer from "react-spotify-web-playback/lib"

const Player = ({ playID }) => {
    const [playing, setPlaying] = useState(false)
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        console.log(playID)
        setPlaying(true)
    }, [playID])

    if (!accessToken) {
        return null
    }
    return (
        <div>
            <SpotifyWebPlayer
                token={localStorage.getItem('accessToken')}
                uris={playID}
                showSaveIcon
                callback={state => {
                    if (!state.isPlaying) {
                        setPlaying(false)
                    }
                }}
                play={playing}
                initialVolume={0.5}
                autoPlay={false}
            />
        </div>
    )
}
export default Player