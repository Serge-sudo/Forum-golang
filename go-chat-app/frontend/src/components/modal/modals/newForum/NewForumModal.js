import {useState} from "react";
import "./NewForumModal.scss"

function NewForumModal({onCreate}) {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onCreate(name);
    }

    return (
        <div className={"new-forum-modal"}>
            <h5>Set the name for channel</h5>
            <form onSubmit={handleSubmit} className={"new-forum-modal_form"}>
                <input
                    type="text"
                    placeholder={"name"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default NewForumModal;
