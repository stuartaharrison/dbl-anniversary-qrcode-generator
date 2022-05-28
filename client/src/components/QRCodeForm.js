import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QRCodeFormResults } from "./index";
import { useGeneratePlayerCodesMutation } from "../services/qrcodeService";

const QRCodeForm = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setplayerTwo] = useState('');
    const [playerThree, setplayerThree] = useState('');
    const [generatePlayerCodes, mutationResult] = useGeneratePlayerCodesMutation();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // create the friend code array we will post up
        const codes = [];
        if (playerOne && playerOne.length > 0) {
            codes.push(playerOne);
        }

        if (playerTwo && playerTwo.length > 0) {
            codes.push(playerTwo);
        }

        if (playerThree && playerThree.length > 0) {
            codes.push(playerThree);
        }

        // if (codes.length === 0) {
        //     return;
        // }

        generatePlayerCodes({ friendCodes: codes }).unwrap();
    };

    return (
        <React.Fragment>
            <Form className="p-3" onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Player One</Form.Label>
                    <Form.Control 
                        type="text" 
                        maxLength="10"
                        placeholder="Friend Code (e.g. e4qxnjw2)"
                        value={playerOne}
                        onChange={(e) => setPlayerOne(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Player Two</Form.Label>
                    <Form.Control 
                        type="text" 
                        maxLength="10"
                        placeholder="Friend Code (e.g. e4qxnjw2)"
                        value={playerTwo}
                        onChange={(e) => setplayerTwo(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Player Three</Form.Label>
                    <Form.Control 
                        type="text" 
                        maxLength="10"
                        placeholder="Friend Code (e.g. e4qxnjw2)"
                        value={playerThree}
                        onChange={(e) => setplayerThree(e.target.value)} 
                    />
                </Form.Group>
                <Button type="submit">Create QRCodes</Button>
            </Form>
            <QRCodeFormResults mutation={mutationResult} />
        </React.Fragment>
    );
};

export default QRCodeForm;