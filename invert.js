function invert(obj) {
    const reversedEntries = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(reversedEntries);
};

console.log(invert({ a: "x", b: "y", c: "z" }));