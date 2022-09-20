export function fetchReducer(dispatch, endPoint, errorMessage) {
    const headers = {
        headers: {
            'Authorization': `Basic ${process.env.REACT_APP_AUTH_KEY}`
        }
    }
    dispatch({ type: 'loading'})
        fetch(`https://api.roadgoat.com/api/v2/destinations/${endPoint}-usa`, headers)
            .then(data => {
                if(data.status === 404) {
                    return dispatch({
                        type: 'error',
                        error: errorMessage
                    })
                } else if(data.status === 200 || data.status === 304) {
                    return data.json()
                }
            })
            .then(res => {
                dispatch({type: 'success',
                res: res
                })
            })
            .catch(err => {
                dispatch({
                    type: 'error',
                    error: `Unexpected turbulence! Please try again later. Error: ${err}`
                })
            })           
}
