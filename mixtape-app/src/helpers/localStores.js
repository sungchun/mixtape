export const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken)
}

export const setTokenType = (tokenType) => {
    localStorage.setItem('tokenType', tokenType)
}

export const setExpiry = (expiry) => {
    localStorage.setItem('expiresIn', expiry)
}

export const removeAccessToken = () => {
    localStorage.removeItem('accessToken')
}