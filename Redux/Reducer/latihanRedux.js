import {
    INCREMENT,
    DECREMENT,
    CLEAR_DATA
} from '../Constants/constantLatihanRedux'

const initialState = {
    value: 1,
    isLogged: false
}

const latihanRedux = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 }
        case DECREMENT:
            return { ...state, value: state.value - 1 }
        case CLEAR_DATA:
            return { ...state, isLogged: !state.isLogged }
    }
    return state
}

export default latihanRedux