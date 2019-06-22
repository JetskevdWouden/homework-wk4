import {SELECTED_DATA} from '../actions/Click'

//adds the selected data to the state

export default (initialState = [], action = {}) => {
    switch (action.type) {
        case SELECTED_DATA:
            return [...initialState, action.payload]
        default:
            return initialState
    }
}