import '../styles/Buttons.css'

const Login = () => {
    const authorizeEndpoint = 'https://accounts.spotify.com/authorize'
    const redirectUri = 'http://localhost:3000/'
    const clientID = '3491bd99fc3d48a695f0ef714ca56d4e'
    const spaceDelimiter = '%20'
    const scopes = [
        'user-library-read',
        'user-library-modify',
        'streaming',
        'user-read-email',
        'user-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
    ]
    const scopesUrlParam = scopes.join(spaceDelimiter)

    function handleLogin() {
        window.location = `${authorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopesUrlParam}&response_type=token&show_dialog=true`
    }

    return (
        <>
            {(localStorage.getItem('accessToken')) ? (<></>) : (
                <div className='login_container'>
                    <button className='login_button' onClick={handleLogin}>SPOTIFY LOGIN</button>
                </div >)
            }
        </>
    )
}
export default Login