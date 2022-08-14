function parseCount(value) {
if (isNaN(Number.parseInt(value))) {
throw new Error('Невалидное значение');
  }
return Number.parseInt(value);
}

console.log(parseCount(1,2,3));


function validateCount(value) {
	try {
       return parseCount(value);
	}
	catch (error) {return error}
}



class Triangle { 
    constructor (a, b, c){ 
    this.a = a 
    this.b = b 
    this.c = c   
   
    if ((a + b) < c || (a + c) < b || (b + c) < a){ 
    throw new Error ("Треугольник с такими сторонами не существует") 
       } 
    }

    getPerimeter(a, b, c){ 
      return this.a + this.b + this.c;  
    } 
   
    getArea(a, b, c){ 
      let p = this.getPerimeter() / 2; 
      return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3); 
       }     
    } 

  function getTriangle(a, b, c){ 
    try { 
        return new Triangle(a, b, c); 
    } catch (err) { 
        return { 
            getArea(){  
                return "Ошибка! Треугольник не существует" 
            },
            getPerimeter(){  
                return "Ошибка! Треугольник не существует" 
            } 
        } 
    } 
}


