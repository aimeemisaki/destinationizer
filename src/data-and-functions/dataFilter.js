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


