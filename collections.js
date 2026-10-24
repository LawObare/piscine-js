function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join('');
}

function strToArr(str) {
    return str.split('');
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(''));
}

function superTypeOf(val) {
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    let type = Object.prototype.toString.call(val).slice(8, -1);
    if (type === 'Number' || type === 'String' || type === 'Boolean' || type === 'Function') {
        return type.toLowerCase();
    }
    return type;
}
