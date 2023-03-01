const libraryDiv = document.querySelector(".library");
const addButton = document.querySelector(".add");
const container = document.querySelector(".container");
const formPopup = document.querySelector("#popup");

let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.bookCard = document.createElement("div");
  this.bookCard.className = "book";
  this.bookCard.setAttribute("position", "relative");
  libraryDiv.appendChild(this.bookCard);

  this.bookCardDelete = document.createElement("button");
  this.bookCardDelete.setAttribute(
    "style",
    "border:none;background-color:rgba(0,0,0,0);align-self:flex-end;"
  );
  this.bookCardDelete.addEventListener("click", this);
  this.bookCard.appendChild(this.bookCardDelete);

  this.bookCardDeleteIcon = document.createElement("img");
  this.bookCardDeleteIcon.className = "delete";
  this.bookCardDelete.appendChild(this.bookCardDeleteIcon);
  this.bookCardDeleteIcon.setAttribute("src", "./close.png");
  this.bookCardDeleteIcon.setAttribute("style", "width:10px;height:10px;");

  this.bookCardTitle = document.createElement("p");
  this.bookCardTitle.className = "title";
  this.bookCard.appendChild(this.bookCardTitle);

  this.bookCardAuthor = document.createElement("p");
  this.bookCardAuthor.className = "author";
  this.bookCard.appendChild(this.bookCardAuthor);

  this.bookCardInfo = document.createElement("div");
  this.bookCardInfo.className = "info";
  this.bookCard.appendChild(this.bookCardInfo);

  this.bookCardPageNumber = document.createElement("span");
  this.bookCardInfo.appendChild(this.bookCardPageNumber);

  this.bookCardRead = document.createElement("button");
  this.bookCardRead.className = "read-button";
  this.bookCardRead.addEventListener("click", this);
  this.bookCardInfo.appendChild(this.bookCardRead);

  read == "read"
    ? this.bookCardRead.classList.add("read")
    : this.bookCardRead.classList.add("notread");

  this.bookCardTitle.textContent = this.title;
  this.bookCardAuthor.textContent = "by " + this.author;
  this.bookCardPageNumber.textContent = this.pages + " pages";
  this.bookCardRead.textContent = this.read;
}

Book.prototype.handleEvent = function (e) {
  if (e.type === "click") {
    if (e.target.classList.contains("read-button")) {
      this.toggleReadStatus();
    } else if (e.target.classList.contains("delete")) {
      this.deleteBook();
    }
  }
};

Book.prototype.toggleReadStatus = function () {
  if (this.read === "read") {
    this.bookCardRead.classList.remove("read");
    this.bookCardRead.classList.add("notread");
    this.bookCardRead.textContent = "not read";
    this.read = "not read";
  } else if (this.read === "not read") {
    this.bookCardRead.classList.remove("notread");
    this.bookCardRead.classList.add("read");
    this.bookCardRead.textContent = "read";
    this.read = "read";
  }
};

Book.prototype.deleteBook = function () {
  if (this.index === library.indexOf(this)) {
    this.bookCard.remove();
    library.splice(this.index, 1);

    // reassign the index of each Book object to match with its new Library array index
    library.forEach(
      (bookInLibrary) =>
        (bookInLibrary["index"] = library.indexOf(bookInLibrary))
    );
    assignBackgroundColors();
  }
  console.log(library);
};

function newBook(event) {
  event.preventDefault();
  let formReadFlag;
  const formTitle = document.querySelector("#title").value;
  const formAuthor = document.querySelector("#author").value;
  const formPages = document.querySelector("#pages").value;
  const readFlag = document.querySelector("#read-flag:checked");

  const books = libraryDiv.querySelectorAll(".book");
  books.forEach((bookInLibrary) => {
    if (formTitle == bookInLibrary.title) {
      console.log("nooo");
    }
  });

  const capitalFormTitle = capitalize(formTitle);
  const capitalFormAuthor = capitalize(formAuthor);

  // check if checkbox is checked
  if (readFlag) {
    formReadFlag = "read";
  } else {
    formReadFlag = "not read";
  }

  const book = new Book(
    `${capitalFormTitle}`,
    `${capitalFormAuthor}`,
    `${formPages}`,
    formReadFlag
  );
  library.push(book);
  book.index = library.length - 1;
  closeForm();
  assignBackgroundColors();
}

function capitalize(word) {
  return word
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

function assignBackgroundColors() {
  const colors = ["#fcf4dd", "#ddedea", "#fce1e4", "#e8dff5", "#daeaf6"];
  const books = libraryDiv.querySelectorAll(".book");
  let i = 0;

  books.forEach((book) => {
    book.style.backgroundColor = colors[i];

    if (i === colors.length - 1) {
      i = 0;
    } else {
      i++;
    }
  });
}

function openForm() {
  const form = document.querySelector("#form");
  form.reset();
  container.classList.add("blur");
  container.classList.add("no-pointer");
  formPopup.style.display = "block";
}

function closeForm() {
  container.classList.remove("blur");
  container.classList.remove("no-pointer");
  formPopup.style.display = "none";
}

///////// maybe add a rating function for each book (w. stars and stuff)
