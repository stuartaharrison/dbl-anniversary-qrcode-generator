import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import QRCodeModal from "./QRCodeModal";
import { useFetchFriendsQuery } from "../services/friendsService";

const FriendsListTable = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const { data, error, isLoading } = useFetchFriendsQuery();
    
    return (
        <div className="container">
            <QRCodeModal friend={selectedFriend} setFriend={setSelectedFriend} />
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Friend Code</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && (<tr><td colSpan="3">Loading...</td></tr>)}
                    {!isLoading && error && (<tr><td colSpan="3">There was a problem getting your results.</td></tr>)}
                    {!isLoading && !error && data && data.map((r, i) => (
                        <tr key={i}>
                            <td>{r.name}</td>
                            <td>{r.friendCode}</td>
                            <td>
                                <Button onClick={() => setSelectedFriend(r)}>Generate QRCode</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default FriendsListTable;