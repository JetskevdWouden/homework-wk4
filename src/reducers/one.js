import { SELECTED_DATA } from '../actions/Click'

export default (initialState = [], action = {}) => {
    switch (action.type) {
        case SELECTED_DATA:
            return [...initialState, action.payload]
        default:
            return initialState
    }
}