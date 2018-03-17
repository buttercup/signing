const BUTTERCUP_FORMAT = "buttercup/a";
const BUTTERCUP_SIGNATURE = "b~>" + BUTTERCUP_FORMAT;

function getFormat() {
    return BUTTERCUP_FORMAT;
}

function getSignature() {
    return BUTTERCUP_SIGNATURE;
},

function hasValidSignature(text) {
    return text.indexOf(BUTTERCUP_SIGNATURE) === 0;
}

function sign(text) {
    return hasValidSignature(text) ? text : BUTTERCUP_SIGNATURE + text;
}

function stripSignature(text) {
    const sigLen = BUTTERCUP_SIGNATURE.length;
    return text.substr(sigLen, text.length - sigLen);
}

module.exports = {
    getFormat,
    getSignature,
    hasValidSignature,
    sign,
    stripSignature
};
