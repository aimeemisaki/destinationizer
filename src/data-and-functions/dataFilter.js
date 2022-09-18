export function attributesFilter (input) {
    const attributesArr = []
    for (let i=0; i < input.length; i++ ) {
        if (input[i].type.includes('known_for')) {
            attributesArr.push(input[i].attributes.name)
        }
    }
    return attributesArr
}

export function iconsFilter (input) {
    const iconsArr = []
    for (let i=0; i < input.length; i++ ) {
        if (input[i].type.includes('known_for')) {
            iconsArr.push(input[i].attributes.icon)
        }
    }
    return iconsArr
}

// export function populationFixer (num) {
//     return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
// }

export function budgetNumFilter (input) {
    const city = input.name
    const keysArr = (Object.keys(input.budget))
    keysArr.forEach((key => {
        if (key === `${city}`) {
            const ratingsArr = Object.values(input.key)
            return ratingsArr[0]
        } 
    }))
}

export function budgetTextFilter (input) {
    const city = input.name
    const keysArr = (Object.keys(input.budget))
    keysArr.forEach((key => {
        if (key === `${city}`) {
            const ratingsArr = Object.values(input.key)
            return ratingsArr[1]
        } 
    }))
}


