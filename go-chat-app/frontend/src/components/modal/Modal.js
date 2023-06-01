import "./Modal.scss"

function Modal({setShowModal, Content}) {
    return (
        <div className={"modal-window"}>
            <div className={"modal-background"}
                 onClick={() => setShowModal(false)}
            />
            <div className={"modal-content"}>
                <span className={"material-symbols-outlined modal-close-button"}
                      onClick={() => setShowModal(false)}>
                cancel
                </span>
                {Content}
            </div>
        </div>
    );
}

export default Modal;
