function createPerson(name, age) {
    return {
        name,
        age,
        introduce() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };
}

const person = createPerson('Sinterklaas', 115);

console.log(person.introduce());