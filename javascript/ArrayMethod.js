const number = [1,2,3,4,5];
const ChangeArraytoObject = number.map((num)=>{
    return {'val':num};
});

// noting to update
console.log(ChangeArraytoObject);