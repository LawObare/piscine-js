function letterSpaceNumber(str) {
    const pattern = /e\s1/g;
    const result = str.match(pattern);
    return result || []
};
