import MixtapeCard from "./MixtapeCard"
import { useState, useEffect } from "react"
import '../styles/MixtapeCard.css'

const Mixtape = ({ userSongs, setUserSongs, setPlayID }) => {
    const [mixtapeTracks, setMixtapeTracks] = useState([])

    useEffect(() => {
        setMixtapeTracks(userSongs)
    }, [userSongs])

    return (
        <div> 
            <h1 className='mixtape-header'>Your Collection</h1>
            <div className='mixtape'>
                {mixtapeTracks.map((song) => (
                    <li className='mixtape-list-item' key={song.id} >
                        <MixtapeCard {...song} userSongs={userSongs} setUserSongs={setUserSongs} setPlayID={setPlayID}/>
                    </li>
                ))
                }
            </div>
        </div >
    )

}
export default Mixtape