

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}


const square = p => {
    console.log(p)
    return p * p
}


const square2 = p => p * p

function product(a, b) {
    return a * b
}

const average = function(a, b) {
    return (a + b) / 2
}



const arto = {
    name: 'Roberto',
    age: 35,
    educateion: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b){
        console.log( a + b )
    }
}

arto.growOlder = function () {
    this.age += 1
}

arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition

referenceToAddition(10, 15)


const referenceToGreet = arto.greet
referenceToAddition()

setTimeout(arto.greet, 1000)
setTimeout(arto.greet.bind(arto), 1000) //Create a new function where this is bound to point to Arto



