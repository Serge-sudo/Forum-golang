import axios from "axios";
import Cookies from 'js-cookie';

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAN_ERROR,
    GET_USER_INFO
} from "./authTypes";


export const login = (username, password) => async (dispatch) => {
    try {
        const res = await axios.post("/api/login", {
            username,
            password,
        });
        Cookies.set('token', res.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.response.data,
        });
    }
};


export const register = (username, password) => async (dispatch) => {
    try {
        const res = await axios.post("/api/register", {
            username,
            password,
        });
        Cookies.set('token', res.data.token);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: err.response.data,
        });
    }
};

export const logout = () => (dispatch) => {
    Cookies.remove('token');
    dispatch({
        type: LOGOUT,
    });
};

export const cleanError = () => (dispatch) => {
    dispatch({
        type: CLEAN_ERROR,
    });
};



export const getUserInfo = () => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.get("/api/user",options);
        dispatch({
            type: GET_USER_INFO,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.response.data,
        });
    }
};