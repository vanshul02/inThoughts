import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card/Card";
import Button from "../../shared/components/FormElements/Button/Button";
import Modal from "../../shared/components/UIElements/Modal/Modal";
import './EntryCardItem.css';
import Maps from "../../shared/components/UIElements/Maps/Maps";
import { AuthContext } from "../../shared/context/auth-context";

const EntryCardItem = props => {

    const auth = useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const OpenMapHandler = () => setShowMap(true);

    const CloseMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => setShowConfirmModal(true);

    const cancelDeleteHandler = () => setShowConfirmModal(false);

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log("DELETING..!!");
    };

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                Oncancel={CloseMapHandler}
                header={`Location on ${props.date}`}
                contentClass="entrycard-item__modal-content"
                footerClass="entrycard-item__modal-actions"
                footer={<Button onClick={CloseMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Maps center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure ?"
                footerClass="entrycard-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}> CANCEL </Button>
                        <Button danger onClick={confirmDeleteHandler}> DELETE </Button>
                    </React.Fragment>
                }
            >
                Deletion is a permanent action. Once an entry is deleted it cannot be undone!
            </Modal>
            <li className="entrycard-item" key={props.eid}>
                <Card className="entrycard-item__content">
                    <div className="entrycard-item__image"> <img src={props.image} alt={props.title} /> </div>
                    <div className="entrycard-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.date}</h3>
                        <p>{props.desc}</p>
                    </div>
                    <div className="entrycard-item__actions">
                        <Button inverse onClick={OpenMapHandler}>VIEW ON MAP</Button>
                        {auth.isLoggedIn && <Button to={`/entry/${props.eid}/`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );

};
export default EntryCardItem;