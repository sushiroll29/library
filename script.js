const libraryDiv = document.querySelector('.library');

let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}.`;
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 255, 'not read yet');
const book2 = new Book('Harry Potter and the Goblet of Fire', 'J.K.Rowling', 355, 'read');
const book3 = new Book('The Ballad of Songbirds and Snakes', 'Suzanne Collins', 355, 'read');


function addBookToLibrary(book){
    library.push(book);
}

function displayLibrary(){
    library.forEach(book => {
        addBookToLibrary(book);

        const bookCard = document.createElement('div');
        bookCard.className = 'book';
        const title = document.createElement('p');
        title.className = 'title';
        const author = document.createElement('p');
        author.className = 'author';
        const info = document.createElement('div');
        info.className = 'info';
        const pageNumber = document.createElement('span');
        const read = document.createElement('span');

        libraryDiv.appendChild(bookCard);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(info);
        info.appendChild(pageNumber);
        info.appendChild(read);

        title.textContent = book.title;
        author.textContent = 'by ' + book.author;
        pageNumber.textContent = book.pages + ' pages';
        read.textContent = book.read;
    })
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayLibrary();