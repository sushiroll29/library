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

    this.bookCard = document.createElement('div');
    this.bookCard.className = 'book';
    libraryDiv.appendChild(this.bookCard);

    this.bookCardTitle = document.createElement('p');
    this.bookCardTitle.className = 'title';
    this.bookCard.appendChild(this.bookCardTitle);

    this.bookCardAuthor = document.createElement('p');
    this.bookCardAuthor.className = 'author';
    this.bookCard.appendChild(this.bookCardAuthor);

    this.bookCardInfo = document.createElement('div');
    this.bookCardInfo.className = 'info';
    this.bookCard.appendChild(this.bookCardInfo);

    this.bookCardPageNumber = document.createElement('span');
    this.bookCardInfo.appendChild(this.bookCardPageNumber);

    this.bookCardRead = document.createElement('button');
    this.bookCardRead.className = 'read-button';
    this.bookCardRead.addEventListener('click', this);
    this.bookCardInfo.appendChild(this.bookCardRead);

    (read == 'read')
        // ? this.bookCardRead.style.backgroundColor = 'green'  
        // : this.bookCardRead.style.backgroundColor = 'red';
        ? this.bookCardRead.classList.add('read')
        : this.bookCardRead.classList.add('notread');

    this.bookCardTitle.textContent = this.title;
    this.bookCardAuthor.textContent = 'by ' + this.author;
    this.bookCardPageNumber.textContent = this.pages + ' pages';
    this.bookCardRead.textContent = this.read;
}

Book.prototype.handleEvent = function(e) {
    if(e.type === 'click') {
        if(e.target.classList.contains('read-button')) {
            this.toggleReadStatus(e);
        }
    }
}

Book.prototype.toggleReadStatus = function(e) {
    if(this.read === 'read') {
        this.bookCardRead.classList.remove('read');
        this.bookCardRead.classList.add('notread');
        this.bookCardRead.textContent ='not read';
        this.read = 'not read';
    } else if(this.read === 'not read')
    {
        this.bookCardRead.classList.remove('notread');
        this.bookCardRead.classList.add('read');
        this.bookCardRead.textContent = 'read';
        this.read = 'read';
    }
    // console.log(this)
}

function newBook(event){
    event.preventDefault();
    let formReadFlag;
    const formTitle = document.querySelector('#title').value;
    const formAuthor = document.querySelector('#author').value;
    const formPages = document.querySelector('#pages').value;
    const readFlag = document.querySelector('#read-flag:checked');

    // check if checkbox is checked
    if(readFlag) {
        formReadFlag = 'read';
    } else {
        formReadFlag = 'not read';
    }
    
    const book = new Book(`${formTitle}`, `${formAuthor}`, `${formPages}`, formReadFlag)
    library.push(book);
    book.index = library.length - 1;
    closeForm();
    assignBackgroundColors();

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
    formInputs.forEach(input => {
        input.value = '';
        // input.removeAttribute('required');
});
    container.classList.remove('blur');
    container.classList.remove('no-pointer');
    form.style.display = 'none';
}




///////// maybe add a rating function for each book (w. stars and stuff)

