import React, {Fragment, useState} from "react";
import "./Header.scss"

import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth/authActions";
import {deleteForum} from "../../redux/forums/forumActions";
import Modal from "../modal/Modal";
import DelForumModal from "../modal/modals/delForum/DelForumModal";

function Header() {

    return (
        <div className={"header"}>
            <ForumName/>
            <User/>
        </div>
    );
}

function ForumName() {

    const current = useSelector((state) => state.forums.current);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    return (
        <Fragment>
            <div className={"forumName"}>
                {
                    (current && user) &&
                    <Fragment>
                    <span className="material-symbols-outlined">
                        subdirectory_arrow_right
                    </span>
                        <div>
                            <h2>{current.name}</h2>
                            <span>Created by #{current.creatorId}</span>
                        </div>

                        {(current.creatorId == user.id) && (
                            <span className="material-symbols-outlined" onClick={() => setShowModal(true)}>
                            disabled_by_default
                        </span>
                        )}
                    </Fragment>
                }
            </div>

            {showModal && (

                <Modal setShowModal={setShowModal} Content={
                    <DelForumModal setShowModal={setShowModal} onDelete={() => {dispatch(deleteForum(current.id));  setShowModal(false);}}/>
                }/>
            )}</Fragment>

    )
        ;
}

function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return (
        <div className={"user"}>
            <h3><span>#{user && user.id}&nbsp;</span>{user && user.username}</h3>
            <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
    );
}


export default Header;
