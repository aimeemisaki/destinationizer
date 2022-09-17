export function fetchReducer(dispatch, endPoint, errorMessage) {
    const headers = {
        headers: {
            'Authorization': 'Basic ZGRkNDdjODVkYzM5ZjU1ZjdlN2YzMmU5ZGQ0YmI0YzY6YjNmZTk5NjM4MWQ2MGQ2OTAwYmZjYmI3OWViYjExOGQ='
        }
    }
    dispatch({ type: 'loading'})
        fetch(`https://api.roadgoat.com/api/v2/destinations/${endPoint}-usa`, headers)
            .then(res => {
                if(res.status === 404) {
                    return dispatch({
                        type: 'error',
                        error: errorMessage
                    })
                } else if(res.status === 200 || res.status === 304) {
                    return res.json()
                }
            })         
}
