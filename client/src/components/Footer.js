import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar className="p-3" bg="light" variant="light" fixed="bottom">
            <Container fluid className="pt-3 text-center">
                <div className="mx-auto">
                    <p className="mb-4">
                        Website by <a rel="noreferrer" href="https://www.stuart-harrison.com" target="_blank">Stuart Harrison</a>
                        <br />
                        Project is open source and fully available on <a rel="noreferrer" href="https://github.com/stuartaharrison/dbl-anniversary-qrcode-generator" target="_blank">Github</a>
                    </p>
                </div>
            </Container>
        </Navbar>
    );
};

export default Footer;
