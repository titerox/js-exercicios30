

function quad(algarismo){
    let numToString = String(algarismo).split('')
    let stringToNum = []
    for (let i in numToString){
        stringToNum += (String(Number(numToString[i]**2)))
    }
    return Number(stringToNum)
}

console.log(quad(3514))
console.log(quad(994571))
console.log(quad(24))
console.log(quad(745821698))



