import React, {useEffect, useState} from "react";
import "./Sidebar.scss"
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrent, createForum, getForums} from "../../redux/forums/forumActions";
import {getMessages} from "../../redux/messages/messagesActions";
import NewForumModal from "../modal/modals/newForum/NewForumModal";

function Sidebar() {
    const dispatch = useDispatch();
    const forums = useSelector((state) => state.forums.forums);
    const [query, setQuery] = useState("");
    useEffect(() => {
        dispatch(getForums())
    }, []);

    return (
        <div className={"side_bar"}>
            <Search setQuery={setQuery} query={query}/>
            <div className={"forums"}>

                <ul>
                    {forums &&
                        forums.filter(item => item.name.toLowerCase().includes(query.toLowerCase())).map(item => (
                            <li onClick={() => {
                                dispatch(changeCurrent(item.id)).then(() => {
                                    dispatch(getMessages());
                                });


                            }}> <span className="material-symbols-outlined">
arrow_right_alt
</span> {item.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

function Search({query, setQuery}) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    function handleCreateForum(name) {
        dispatch(createForum(name));
        setShowModal(false);
    }


    function cleanQuery(e) {
        // setQuery('');
        e.target.blur();
    }

    return (
        <div className={"search_bar"}>

            <div className={"wrapper"}>

                <div className="box">
                    <form name="search">
                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="input"
                               name="txt" onMouseOut={cleanQuery}/>
                    </form>
                    <i className="material-symbols-outlined">
                        search
                    </i>
                </div>

                <span onClick={() => setShowModal(true)} className="add-icon material-symbols-outlined">
                add_box
                </span>
            </div>

            {showModal && (

                <Modal setShowModal={setShowModal}  Content={
                    <NewForumModal onCreate={handleCreateForum}/>

                }/>
            )}
        </div>

    );
}

export default Sidebar;
