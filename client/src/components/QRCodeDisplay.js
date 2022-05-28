import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const QRCodeDisplay = ({ image, imageData, width = 256, height = 256 }) => {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(
                <Tooltip>{imageData}</Tooltip>
            )}
        >
            <img src={image} width={width} height={height} alt={imageData} />
        </OverlayTrigger>
    );
};

export default QRCodeDisplay;