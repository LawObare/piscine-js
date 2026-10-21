const escapeStr = "`\\/\"'";

const arr = [4, "2"];
Object.freeze(arr);

const obj = {
    str : "Lawi",
    num : 19,
    bool : false,
    undef : undefined
};
Object.freeze(obj);

const nestedArr = [4, undefined, '2'];
const nestedObj = {
    str : "Lawi",
    num : 19,
    bool : false,
};

Object.freeze(nestedArr);
Object.freeze(nestedObj);

const nested = {
    arr : nestedArr,
    obj : nestedObj
};
Object.freeze(nested);