const number = [1,2,3,4];
const newNumber = [...number,5,6,7];
console.log(newNumber);

const obj={
    name:"Dilber Husain Khan"
};
const newObj = {
    ...obj,
    age:23
}
console.log(newObj);


const filter = (...args)=>{
    return args.filter( el => el===1);
}

console.log(filter(1,2,3,4));