import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QRCodeFormResults } from "./index";
import { useGeneratePlayerCodesMutation } from "../services/qrcodeService";

const QRCodeForm = () => {
    const [playerOne, setPlayerOne] = useState(localStorage.getItem('p1-code') ?? '');
    const [playerTwo, setplayerTwo] = useState(localStorage.getItem('p2-code') ?? '');
    const [playerThree, setplayerThree] = useState(localStorage.getItem('p3-code') ?? '');
    const [rememberCodes, setRememberCodes] = useState(localStorage.getItem('remember-codes') === 'true' ? true : false);
    const [generatePlayerCodes, mutationResult] = useGeneratePlayerCodesMutation();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // create the friend code array we will post up
        const codes = [];
        if (playerOne && playerOne.length > 0) {
            if (rememberCodes === true) {
                localStorage.setItem('p1-code', playerOne);
            }
            codes.push(playerOne);
        }

        if (playerTwo && playerTwo.length > 0) {
            if (rememberCodes === true) {
                localStorage.setItem('p2-code', playerTwo);
            }
            codes.push(playerTwo);
        }

        if (playerThree && playerThree.length > 0) {
            if (rememberCodes === true) {
                localStorage.setItem('p3-code', playerThree);
            }
            codes.push(playerThree);
        }

        if (codes.length === 0) {
            return;
        }

        generatePlayerCodes({ friendCodes: codes }).unwrap();
    };

    React.useEffect(() => {
        localStorage.setItem('remember-codes', rememberCodes)
    }, [rememberCodes]);

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
                <Form.Check 
                    type="checkbox"
                    className="mb-3"
                    label="Remember Player Codes"
                    checked={rememberCodes}
                    onChange={(_) => setRememberCodes(prev => !prev)}
                />
                <Button type="submit">Create QRCodes</Button>
            </Form>
            <QRCodeFormResults mutation={mutationResult} />
        </React.Fragment>
    );
};

export default QRCodeForm;