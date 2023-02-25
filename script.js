const h = document.querySelector('.a');
console.log(h.textContent);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}.`;
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 255, 'not read yet');

function addBook(){
    h.textContent = book.info();
}

addBook();