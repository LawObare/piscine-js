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

const nested = {
    arr : [4, '2'],
    obj : {
        str : "Lawi",
        num : 19,
        bool : true
    }
};

Object.freeze(nested.arr);
Object.freeze(nested.obj);