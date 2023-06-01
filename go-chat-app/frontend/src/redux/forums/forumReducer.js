// forumReducer.js
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAN_ERROR,
    GET_USER_INFO, GET_FORUMS, CREATE_FORUM, DELETE_FORUM, CHANGE_CURRENT
} from "./forumTypes";

import Cookies from 'js-cookie';

const initialState = {
    forums: null,
    current: null
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORUMS:
            return {
                ...state,
                forums: action.payload,
                current: null
            };
        case CREATE_FORUM:
            return {
                ...state,
                forums: action.payload,
            };
        case DELETE_FORUM:
            return {
                ...state,
                forums: action.payload,
                current: null
            };

        case CHANGE_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};

export default forumReducer;
