function average(...numbers){
    let sum = 0
    let cont = 0
    numbers.forEach(number => {
        sum += number // sum = sum + number
        
    });
    const media = sum/numbers.length
    return media
}

function media(number){
    let sum = 0
    for (n in number){
        sum += Number(number[n])        
    }
    return sum/number.length
}



let n1 = [1, 2, 3, 4]


console.log(average(1, 2, 3, 4))
console.log(media(n1))
