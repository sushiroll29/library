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
    this.bookCardTitle = document.createElement('p');
    this.bookCardTitle.className = 'title';
    this.bookCardAuthor = document.createElement('p');
    this.bookCardAuthor.className = 'author';
    this.bookCardInfo = document.createElement('div');
    this.bookCardInfo.className = 'info';
    this.bookCardPageNumber = document.createElement('span');
    this.bookCardRead = document.createElement('button');
    this.bookCardRead.className = 'read-button';
    if(this.bookCardRead.textContent === 'read') {
        this.read = true;
        this.bookCardRead.style.backgroundColor = 'green';
    } else {
        this.read = false;
        this.bookCardRead.style.backgroundColor = 'red';
    }
    this.bookCardRead.addEventListener('click', this, false);
    

    libraryDiv.appendChild(this.bookCard);
    this.bookCard.appendChild(this.bookCardTitle);
    this.bookCard.appendChild(this.bookCardAuthor);
    this.bookCard.appendChild(this.bookCardInfo);
    this.bookCardInfo.appendChild(this.bookCardPageNumber);
    this.bookCardInfo.appendChild(this.bookCardRead);

    this.bookCardTitle.textContent = this.title;
    this.bookCardAuthor.textContent = 'by ' + this.author;
    this.bookCardPageNumber.textContent = this.pages + ' pages';
    this.bookCardRead.textContent = this.read;
}

Book.prototype.handleEvent = function(e) {
    switch(e.type){
        case 'click': this.toggleReadStatus(e);
    }
}

Book.prototype.toggleReadStatus = function(e) {
    console.log(this)
    if(this.read === true) {
        this.read = false;
        this.bookCardRead.textContent ='read';
        this.bookCardRead.style.backgroundColor = 'green';
    } else {
        this.read = true;
        this.bookCardRead.textContent = 'not read';
        this.bookCardRead.style.backgroundColor = 'red';
    }
    // if(this.bookCardRead.textContent === 'read') {
    //     this.read = false;
    //     this.bookCardRead.textContent = 'not read';
    //     this.bookCardRead.style.backgroundColor = 'red';
    // } else {
    //     this.read = true;
    //     this.bookCardRead.textContent ='read';
    //     this.bookCardRead.style.backgroundColor = 'green';
    // }
    
}
// Book.prototype.info = function(){
//     return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}.`;
// }

Book.prototype.toggleRead = function(){
// console.log('mama')
console.log(this);
// console.log(library.indexOf(this));
const readButton = document.querySelector('.read-button')
        if(this.index === library.indexOf(this)) {
            // console.log('mama');
            if(this.read === 'read'){
                readButton.style.backgroundColor = 'green';
                return 'read';
            } else {
                readButton.style.backgroundColor = 'red';
                return 'unread';
            }
        }
    
        
    
}

function newBook(event){
        event.preventDefault();
        let formReadFlag;
        const formTitle = document.querySelector('#title').value;
        const formAuthor = document.querySelector('#author').value;
        const formPages = document.querySelector('#pages').value;
        const read = document.querySelector('#read-flag:checked');

        // check if checkbox is checked
        if(read) {
            formReadFlag = 'read';
            // formReadFlag = true;
        } else {
            formReadFlag = 'not read';
            // formReadFlag = false;
        }
        
        const book = new Book(`${formTitle}`, `${formAuthor}`, `${formPages}`, `${formReadFlag}`)
        library.push(book);
        console.log(library);
        book.index = library.length - 1;
        closeForm();
        // createBookCard(book);
        assignBackgroundColors();

        // console.log(book.toggleRead());
        
        // const x = document.querySelector('.read-button');
        // x.addEventListener('click', () => {
        //     book.toggleRead();
        //     return;
        //     // console.log(this.book);
        // })

}


// function createBookCard(book){

//     const bookCard = document.createElement('div');
//     bookCard.className = 'book';
//     const title = document.createElement('p');
//     title.className = 'title';
//     const author = document.createElement('p');
//     author.className = 'author';
//     const info = document.createElement('div');
//     info.className = 'info';
//     const pageNumber = document.createElement('span');
//     const read = document.createElement('button');
//     read.className = 'read-button';
//     read.onclick = book.toggleRead;
//     console.log(book);
    

//     libraryDiv.appendChild(bookCard);
//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(info);
//     info.appendChild(pageNumber);
//     info.appendChild(read);

//     title.textContent = book.title;
//     author.textContent = 'by ' + book.author;
//     pageNumber.textContent = book.pages + ' pages';
//     read.textContent = book.read;
// }

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

