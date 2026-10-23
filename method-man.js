function words(a) {
    return a.split(" ")
};
function sentence(b) {
    return b.join(" ")
};
function yell(c) {
    return c.toUpperCase();
};
function whisper(d) {
    return `*${d.toLowerCase()}*`;
};
function capitalize(e) {
    let first = e.charAt(0).toUpperCase();
    let rest = e.substring(1, e.lenght).toLowerCase();
    return first + rest
};
