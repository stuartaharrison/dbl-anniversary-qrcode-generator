import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { QRCodeDisplay } from "./index";

const QRCodeFormResults = ({ mutation }) => {
    const { data, error, isLoading, isUninitialized } = mutation || {}
    const { images } = data || {};

    if (isUninitialized) {
        return;
    }

    return (
        <div className="p-3">
            {isLoading && (<p>Loading..</p>)}
            {error && (<p className="text-danger">{error.data.message}</p>)}
            {data && (
                <Row>
                    {images.map((d, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Header className="fw-bold text-info text-center">
                                    {d.friendCode}
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <QRCodeDisplay image={d.image} imageData={d.data} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default QRCodeFormResults;