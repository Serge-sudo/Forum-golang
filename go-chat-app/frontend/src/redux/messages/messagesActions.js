import axios from "axios";
import Cookies from 'js-cookie';

import {
    GET_MESSAGES,
    CREATE_MESSAGE
} from "./messagesTypes";



export const getMessages = () => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const current = getState().forums.current;
        if(!current) return;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.get(`/api/messages?forumId=${current.id}`,options);
        dispatch({
            type: GET_MESSAGES,
            payload: res.data ? res.data.reverse() : null,
        });
    } catch (err) {
    }
};




export const createMessage = (message,forumId) => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.post("/api/messages", {
            message,
            forumId
        },options);
        dispatch({
            type: CREATE_MESSAGE,
            payload: res.data ?  res.data.reverse(): null,
        });
    } catch (err) {
    }
};

