export function searchReducer(state, action) {
    switch(action.type) {
        case 'update':
            return { ...state, [action.input.key]: action.input.value } 
        default: 
            return state
    }
}