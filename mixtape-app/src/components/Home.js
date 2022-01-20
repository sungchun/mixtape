import { useState, useEffect } from "react"
import { setAccessToken } from "../helpers/localStores.js"
import { setTokenType } from "../helpers/localStores.js"
import { setExpiry } from "../helpers/localStores.js"
import { useHistory } from "react-router"
import Request from "./Request.js"
import Login from "./Login.js"
import Logout from "./Logout.js"
import Mixtape from "./Mixtape.js"
import Player from "./Player.js"
import '../styles/Home.css'

const Home = () => {
    const history = useHistory()
    const [userSongs, setUserSongs] = useState([])
    const [playID, setPlayID] = useState([])

    function getSpotifyParams(hash) {
        const urlString = hash.substring(1)
        const relevantParams = urlString.split('&')
        const splitParams = relevantParams.reduce((accumulate, currentValue) => {
            const [key, value] = currentValue.split('=')
            accumulate[key] = value
            return accumulate
        }, {})

        console.log("splitparams", splitParams)
        return splitParams
    }

    useEffect(() => {
        if (window.location.hash) {
            console.log("use effect if statement reached")
            const { access_token, expires_in, token_type } = getSpotifyParams(window.location.hash)
            localStorage.clear()
            setAccessToken(access_token)
            setTokenType(token_type)
            setExpiry(expires_in)
            console.log("the access stuff", access_token, expires_in, token_type)
            history.push('/')
        }
    })

    return (
        <div className='body'>
            <div className='main'>
                <div className='left-column'>
                    <h1>Welcome to mixtape.</h1>
                    <Logout />
                    <Request userSongs={userSongs} setUserSongs={setUserSongs} setPlayID={setPlayID} />
                    <Login />
                </div>
                <div className='right-column'>
                    <Mixtape userSongs={userSongs} setUserSongs={setUserSongs} setPlayID={setPlayID} />
                </div>
            </div>
            <div className='side'>
                <Player playID={playID} />
            </div>
        </div>
    )
}

export default Home