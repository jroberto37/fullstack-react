const ObjectMe  = () => {

    const object1 = {
        name: 'Roberto',
        age: 37,
        education: 'PhD',
    }

    const object2 = {
        name: 'Full Stack web aplicaction development',
        level: 'intermediate studies',
        size: 5,
    }

    const object3 = {
        name: {
            first: 'Roberto',
            last: 'Lomeli',
        },
        grades: [2, 3, 5, 3],
        department: 'Universidad de Guadalajara'
    }


    console.log(object1.name)
    const fieldName = 'age'
    console.log(object1[fieldName])

    object1.address = 'Guadalajara'
    object1['secret number'] = 12341

    console.log(object1)


}

export default ObjectMe