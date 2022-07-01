class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const roberto = new Person('Roberto', 37)
roberto.greet()

const jose = new Person('Jose', 37)
jose.greet()