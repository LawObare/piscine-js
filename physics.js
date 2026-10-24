function getAcceleration(obj) {
    let key1 = Object.keys(obj)[0];
    let key2 = Object.keys(obj)[1];
    let val1 = Object.values(obj)[0];
    let val2 = Object.values(obj)[1];
    if (key1 === f && key2 === m) {
        return val1 / val2;
    } else if (key1 === Δv && key2 === Δt) {
        return val1 / val2;
    } else if (key1 === d && key2 === t) {
        return (2*val1) / (val2**2);
    } else {
        return "impossible"
    }
};
