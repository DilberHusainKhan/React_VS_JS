class Human{
    gender = "Male";

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    name = "Dilber";
    printName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printGender();
person.printName();