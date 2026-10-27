interface Person {
    name: string,
    age: number,
    country: string
};

const person: Person = {
  name: "Rick",
  age: 77,
  country: "US",
};

const clone1: Person = {...person};
const clone2: Person = Object.assign({}, person);
const samePerson: Person = person;

export {};