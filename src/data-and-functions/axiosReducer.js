import axios from 'axios';

export async function AxiosCall(method, city, state, dispatch) {
    const headers = {
        headers: {
            'Authorization': 'Basic ZGRkNDdjODVkYzM5ZjU1ZjdlN2YzMmU5ZGQ0YmI0YzY6YjNmZTk5NjM4MWQ2MGQ2OTAwYmZjYmI3OWViYjExOGQ='
        }
    }

    let res
    switch(method) {
        case 'GET':
            res = await axios.get(`https://api.roadgoat.com/api/v2/destinations/${city}-${state}-usa`, headers)
                dispatch({
                    key: 'response',
                    value: res.data
                })
        break
        default:
            break
    }
}

export function axiosReducer (state, object) {
    switch(object.key) {
        case 'response':
            return {...state, response: object.value}
    default:
        return state
    }
}