function factorial(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else { 
        var intNum = factorial(n - 1);
            
        return (intNum * n);
    }
  };
  
  console.log(factorial(5));