// forumReducer.js
import {
    GET_MESSAGES,
    CREATE_MESSAGE
} from "./messagesTypes";

import Cookies from 'js-cookie';

const initialState = {
    messages: null,
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case CREATE_MESSAGE:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
};

export default messagesReducer;
