// forumReducer.js
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAN_ERROR,
    GET_USER_INFO
} from "./authTypes";

import Cookies from 'js-cookie';

const initialState = {
    isAuthenticated: !!Cookies.get('token'),
    user: null,
    token: Cookies.get('token') || '',
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: null,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: null,
            };
        case CLEAN_ERROR:
            return {
                ...state,
                error: null,
            };
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: null,
                error: null,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
