const people = {
    age :23
}
const newhuman =people;
people.age=25;
console.log(people);
console.log(newhuman);
// ---------------------------------------

const person ={
    name:'Max'
}
const human = {
    ...person
}
person.name = 'Dilber'
console.log(human);
console.log(person);
