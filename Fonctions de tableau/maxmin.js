function minMax(arr) {
    return[Math.min(...arr),Math.max(...arr)]  
}
const arr=[3,5,-2,4]
const result = minMax(arr);
console.log(result)
