import {
    INCREMENT,
    DECREMENT,
    CLEAR_DATA
} from '../Constants/constantLatihanRedux'

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const clearData = () => ({
    type: CLEAR_DATA
});