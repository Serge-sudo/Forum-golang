import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import forumReducer from "./forums/forumReducer";
import messagesReducer from "./messages/messagesReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    forums: forumReducer,
    messages: messagesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
