function countString(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {

        if (isLetter(str[i])) {
            count += 1;
        }
    }
    return count;
}
function isLetter(s)
{
  return s.match("^[a-zA-Z\(\)]+$");    
}

console.log(countString("bonjour sourour"));