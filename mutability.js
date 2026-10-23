const clone1 = Object.assign({}, person);
const clone2 = {...person};
const samePerson = person;

samePerson.age = 78;
samePerson.country = 'FR';
