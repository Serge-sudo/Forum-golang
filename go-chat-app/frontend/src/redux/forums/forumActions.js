import axios from "axios";

import {
    GET_FORUMS,
    CREATE_FORUM,
    DELETE_FORUM,
    CHANGE_CURRENT
} from "./forumTypes";


export const getForums = () => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.get("/api/forums",options);
        dispatch({
            type: GET_FORUMS,
            payload: res.data,
        });
    } catch (err) {
    }
};




export const createForum = (name) => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.post("/api/forums", {
            name,
        },options);
        dispatch({
            type: CREATE_FORUM,
            payload: res.data,
        });
    } catch (err) {
    }
};


export const deleteForum = (id) => async (dispatch,getState) => {
    try {
        const token = getState().auth.token;
        const options = {
            headers: {
                "Authorization": `${token}`
            }
        };
        const res = await axios.delete(`/api/forums?forumId=${id}`,options);
        dispatch({
            type: DELETE_FORUM,
            payload: res.data,
        });
    } catch (err) {
    }
};

export const changeCurrent = (id) => async (dispatch,getState) => {
    try {
        const forum = getState().forums.forums.filter(item=> item.id === id)[0];
        dispatch({
            type: CHANGE_CURRENT,
            payload: forum,
        });
    } catch (err) {
    }
};