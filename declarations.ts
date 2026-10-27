const escapeStr: string = "`\\\/\"\'";

const arr: (number | string)[] = [4, '2'];
Object.freeze(arr);

const obj: {str: string, num: number, bool: boolean, undef: undefined} = {
    str: "lawi",
    num: 19,
    bool: true,
    undef: undefined
};
Object.freeze(obj);

const nestedArr: (number | undefined | string)[] = [
    4, undefined, '2'
]
Object.freeze(nestedArr)
const nestedObj: {str: string, num: number, bool: boolean} = {
        str: "lawi",
        num: 19,
        bool: true
}
Object.freeze(nestedObj)
const nested: {arr: (number | undefined | string)[], obj: {str: string, num: number, bool: boolean}} = {
    arr: nestedArr,
    obj: nestedObj
};
Object.freeze(nested)

export {};