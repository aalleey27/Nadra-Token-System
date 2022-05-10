function generate_token(lenghth){
    let a = '1234567890'.split('')
    let b = []
    for (let i=0; i<lenghth; i++){
        let j = (Math.random() * (a.length-1)).toFixed(0)
        b[i] = a[j]
    }
    return b.join('')

}
generate_token(4)