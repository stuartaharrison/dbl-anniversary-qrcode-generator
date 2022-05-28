const encryptionWheel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const decodeTimestamp = (encodedValue, wheel = encryptionWheel) => {
    let decodedValue = "";
    
    for (var i = 0; i < encodedValue.length; i++) {
        let decodedChar = wheel.indexOf(encodedValue.charAt(i));
        decodedValue = decodedValue.concat(decodedChar);
    }

    return decodedValue;
};

const encodeTimestamp = (timestamp, wheel = encryptionWheel) => {
    let encodedValue = "";
    let timestampStr = timestamp.toString();
    

    for (var i = 0; i < timestampStr.length; i++) {
        let decodePosition = parseInt(timestampStr.charAt(i));
        let encodedChar = wheel[decodePosition];

        encodedValue = encodedValue.concat(encodedChar);
    }
    
    return encodedValue;
};

module.exports = {
    decodeTimestamp,
    encodeTimestamp
};