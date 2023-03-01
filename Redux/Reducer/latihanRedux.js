import {
    INCREMENT,
    DECREMENT,
    CLEAR_DATA
} from '../Constants/constantLatihanRedux'

const initialState = {
    value: 1
}

const latihanRedux = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        case CLEAR_DATA:
            return state
    }
    return state
}

export default latihanRedux