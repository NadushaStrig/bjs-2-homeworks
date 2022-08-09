class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	
fix(){
	this.state = this.state * 1.5;
}

set state(n){
	if (n < 0) {this._state = 0};
	if (n > 100) {this._state = 100
	} else this._state = n;
	this.fix;
}

get state() {
	return this._state;
 }	
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type){
	super(name, releaseDate, pagesCount, state, type);
	this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type){
	super(name, releaseDate, pagesCount, state, type);
	this.author = author;
	this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
	super(author, name, releaseDate, pagesCount, state, type);
	this.author = author;
	this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
	super(author, name, releaseDate, pagesCount, state, type);
	this.author = author;
	this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
	super(author, name, releaseDate, pagesCount, state, type);
	this.author = author;
	this.type = "detective";
	}
}


class Library {
	constructor(name, books){
		this.name = name;
		this.books = [];
	}


addBook(book){
	if (book._state > 30) this.books.push(book);
	}

findBookBy(argument, value){
    const b = this.books.find(book => book[argument] == value);
    if (b == undefined) {
    	return null;
    } return b;
  }  
 

giveBookByName(bookName) {
  for(let item in this.books){         
    for(let elem in this.books[item]){ 
      if(this.books[item].name == bookName){ 
        let temp = this.books[item]   
        this.books.splice(item, 1)            
        return temp 
        }       
      }    
    } return null; 
  }
}
   
const library = new Library("Библиотека имени Ленина");
console.log(library); 


  

