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

export function populationFixer(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function budgetNumFilter (input) {
    const keys = Object.keys(input.budget)
    const values = Object.values(input.budget)
    for (let i=0; i < keys.length; i++ ) {
      if (keys[i] === `${input.name}` ) {
        const budgetObjs = values[0]
        const budgetKeys = Object.keys(budgetObjs)
        const budgetValues = Object.values(budgetObjs)
        for (let j=0; j < budgetKeys.length; j++) {
          if (budgetKeys[j] === 'value') {
            return budgetValues[j]
          }
        }
      }
    }
  }

export function budgetTextFilter (input) {
    const keys = Object.keys(input.budget)
    const values = Object.values(input.budget)
    for (let i=0; i < keys.length; i++ ) {
      if (keys[i] === `${input.name}` ) {
        const budgetObjs = values[0]
        const budgetKeys = Object.keys(budgetObjs)
        const budgetValues = Object.values(budgetObjs)
        for (let j=0; j < budgetKeys.length; j++) {
          if (budgetKeys[j] === 'text') {
            return budgetValues[j]
          }
        }
      }
    } 
}


