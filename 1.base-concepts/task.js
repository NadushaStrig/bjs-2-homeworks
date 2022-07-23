'use strict'
function solveEquation(a, b, c) {
  let arr;
  let D = b ** 2 - 4*a*c;
  let x1;
  let x2; 

  if (D < 0) {
    arr = [];
  }

  else if (D === 0){
    x1 = -b/(2*a); 
    arr = [x1];
  }
  
  else if (D > 0){
    x1 = Math. trunc(-b + Math.sqrt(D))/(2*a);
    x2 = Math. trunc(-b - Math.sqrt(D))/(2*a);
    arr = [x1, x2]
  }

    return arr;
}
