import {useState} from "react";
import "./DelForumModal.scss"

function DelForumModal({onDelete,setShowModal}) {
    function handleDelete(event) {
        event.preventDefault();
        onDelete();
    }

    return (
        <div className={"del-forum-modal"}>
            <h5>Do you really want to delete this forum?</h5>
            <div className={"del-forum-modal_form"}>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={()=>setShowModal(false)}>Cancel</button>
            </div>
        </div>
    );
}

export default DelForumModal;
