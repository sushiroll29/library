const h = document.querySelector('.a');
const libraryDiv = document.querySelector('.library');

let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}.`;
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 255, 'not read yet');
const book2 = new Book('Harry Potter and the Goblet of Fire', 'J.K. Roling', 355, 'read');

function addBookToLibrary(book){
    library.push(book);
}

function displayLibrary(){
    library.forEach(book => {
        addBookToLibrary(book);
        let p = document.createElement('p');
        p.textContent = book.info();
        libraryDiv.appendChild(p);
    })
}

addBookToLibrary(book1);
addBookToLibrary(book2);
displayLibrary();