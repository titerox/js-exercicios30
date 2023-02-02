function rep(num){
    if (num === 0){
        return ''
    } else if (num === 1){
        return 'chunk'
    } else{
        return 'chunk-' + rep(num - 1)
    }
}

console.log(rep(10)) 