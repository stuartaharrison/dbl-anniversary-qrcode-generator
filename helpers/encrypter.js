const encryptionWheel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const fifthAnniversaryEncryptionWheel = {
    0: 'B',
    1: 'C',
    2: 'D',
    3: 'E',
    4: 'F',
    5: 'G',
    6: 'H',
    7: 'J',
    8: 'K',
    9: 'M',
    a: 'N',
    b: 'P',
    c: 'Q',
    d: 'R',
    e: 'S',
    f: 'T'
};

const decodeTimestamp = (encodedValue, wheel = encryptionWheel) => {
    let decodedValue = "";
    
    for (var i = 0; i < encodedValue.length; i++) {
        let decodedChar = wheel.indexOf(encodedValue.charAt(i));
        decodedValue = decodedValue.concat(decodedChar);
    }

    return decodedValue;
};

const encodeString = (value, wheel) => {
    let encodedValue = "";
    if (!wheel) {
        return encodedValue;
    }

    for (var i = 0; i < value.length; i++) {
        let encodedChar = Array.isArray(wheel)
            ? wheel[parseInt(value.charAt(i))]
            : wheel[value[i]];
        encodedValue = encodedValue.concat(encodedChar);
    }
    
    return encodedValue;
};

const encodeTimestamp = (timestamp, wheel = encryptionWheel) => {
    let timestampStr = timestamp.toString();
    return encodeString(timestampStr, wheel);
};

module.exports = {
    decodeTimestamp,
    encodeString,
    encodeTimestamp,
    encryptionWheel,
    fifthAnniversaryEncryptionWheel
};