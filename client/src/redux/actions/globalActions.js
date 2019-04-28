import axios from 'axios'
import { DUMMY_ACTION } from './types';

//dummy action
export const dummyAction = (value) => dispatch => {
    dispatch({
        type: DUMMY_ACTION,
        payload: value
    })
}