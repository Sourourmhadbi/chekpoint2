function reverseString(str) {
    
    const arrayStrings = str.split("");
    
    const reverseArray = arrayStrings.reverse();
    
    const joinArray = reverseArray.join("");
    return joinArray;
    
    }
   
    console.log(reverseString("bonjour"));