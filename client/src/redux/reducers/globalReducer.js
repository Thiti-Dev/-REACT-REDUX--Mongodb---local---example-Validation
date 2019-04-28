import isEmpty from '../../validation/is-empty'
import { DUMMY_ACTION } from '../actions/types';

const initialState = {
    isWork: "yes",
    changeAbleString: "whatever"
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DUMMY_ACTION:
            return{
                ...state,
                changeAbleString: action.payload
            }
        default:
            return state;
    }
}