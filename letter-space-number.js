function letterSpaceNumber(str) {
    const pattern = /[a-zA-Z]\s[0-9]\b/g;
    let result = str.match(pattern);
    return result;
};
