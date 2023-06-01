import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUserInfo} from "../redux/auth/authActions";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import "./Main.scss"


function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo())
    }, []);


    return (
        <div className={"main"}>
            <div className={"left"}>
                <Sidebar/>
            </div>

            <div className={"right"}>
                <Chat/>
            </div>
        </div>
    );
}

export default Main;
