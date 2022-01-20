import { removeAccessToken } from "../helpers/localStores";

const Logout = () => {
    const authorizeEndpoint = 'https://accounts.spotify.com/authorize'
    const redirectUri = 'http://localhost:3000/callback/'
    const clientID = '3491bd99fc3d48a695f0ef714ca56d4e'
    const spaceDelimiter = '%20'
    const scopes = [
        'user-library-read',
        'user-library-modify'
    ]
    const scopesUrlParam = scopes.join(spaceDelimiter)

    function handleLogout() {
        console.log("trying to log out")
        removeAccessToken()
        window.location = `${authorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopesUrlParam}&response_type=token&show_dialog=true`
    }

    return (
        <>
            {(localStorage.getItem('accessToken')) ? (
                < div className='logout_container' >
                    <button className='logout_button' onClick={handleLogout}>LOGOUT OF SPOTIFY</button>
                </ div >) : (<></>)
            }
        </>
    )
}

export default Logout