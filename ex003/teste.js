let list = [1,2,3,4]
let list2 = ['oi', 'tudo', 'bem', 'com', 'vc']

function invert(lista){
    let reversedArray = []
    for (let n in lista){
        reversedArray.push(lista[lista.length - n-1])
        }
    return reversedArray
    }

console.log(invert(list))
console.log(list)

console.log(invert(list2))