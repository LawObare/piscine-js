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

// Test your frozen objects
arr[0] = "changed"; // Should not change
obj.str = "changed"; // Should not change
nested.obj.bool = "changed"; // Should not change

// Check results
console.log(arr); // Should still be [4, '2']
console.log(obj.str); // Should still be your original string
console.log(nested.obj.bool); // Should still be your original boolean