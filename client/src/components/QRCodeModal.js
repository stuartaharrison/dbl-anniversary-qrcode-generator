import React from "react";
import { Modal } from "react-bootstrap";
import { QRCodeDisplay } from "./index";
import { useGetQrCodeQuery } from "../services/qrcodeService";

const QRCodeModal = ({ friend, setFriend }) => {
    const { friendCode, name } = friend || {};
    const { data, error, isLoading } = useGetQrCodeQuery(friendCode, {
        skip: !friendCode ? true : false
    });
    const { data: imageData, image } = data || {} 

    return (
        <React.Fragment>
            {friend && (
                <Modal show={friend} onHide={() => setFriend(null)}>
                    <Modal.Header>
                        <Modal.Title>Code for <span className="fw-bold text-info">{name}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        {isLoading && (<p>Loading...</p>)}
                        {!isLoading && error && 
                            <p>There was a problem getting your QRCode</p>
                        }
                        {!isLoading && image && (
                            <QRCodeDisplay image={image} imageData={imageData} />
                        )}
                    </Modal.Body>
                </Modal>
            )}
        </React.Fragment>
    )
};

export default QRCodeModal;