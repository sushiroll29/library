const libraryDiv = document.querySelector('.library');
const addButton = document.querySelector('.add');
const form = document.querySelector('#form');
const container = document.querySelector('.container');

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

function newBook(event){
        event.preventDefault();

        library = [];
        let formReadFlag;
        const formTitle = document.querySelector('#title').value;
        const formAuthor = document.querySelector('#author').value;
        const formPages = document.querySelector('#pages').value;
        const read = document.querySelector('#read-flag:checked');

        // check if checkbox is checked
        if(read) {
            formReadFlag = 'read';
        } else {
            formReadFlag = 'not read'
        }
        
        const book = new Book(`${formTitle}`, `${formAuthor}`, `${formPages}`, `${formReadFlag}`);
        addBookToLibrary(book);
        closeForm();
        displayLibrary();
        assignBackgroundColors();
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

function assignBackgroundColors(){
    const colors = ["#fcf4dd","#ddedea","#fce1e4", "#e8dff5", "#daeaf6"];
    const books = libraryDiv.querySelectorAll('.book');
    let i = 0;

    books.forEach(book => {
        book.style.backgroundColor = colors[i];

        if(i === colors.length - 1) {
            i = 0;
        } else {
            i++;
        }
    })
}

function openForm(){
    container.classList.add('blur');
    container.classList.add('no-pointer');
    form.style.display = 'block';
}

function closeForm(){
    const formInputs = document.querySelectorAll(".text-input");
    // clear all the input fields
    formInputs.forEach(input => input.value = '');
    container.classList.remove('blur');
    container.classList.remove('no-pointer');
    form.style.display = 'none';
}

///////// maybe add a rating function for each book (w. stars and stuff)

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayLibrary();
assignBackgroundColors();