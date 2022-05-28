import React from "react";
import { Card, Container } from "react-bootstrap";
import { QRCodeForm } from "../components";

const HomeLayout = () => {
    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <QRCodeForm />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomeLayout;