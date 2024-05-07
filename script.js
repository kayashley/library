const container = document.querySelector(".container");
const form = document.querySelector(".book-form"); // selects dialog box
const main = document.querySelector(".main");

const submitBtn = document.querySelector(".submit-btn"); // selects close button
const addBookBtn = document.querySelector(".add-btn"); // selects book button
const addForm = document.getElementById("add-form");

const library = [];

function Book(title, author, pages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead);
}

/* Add a book - user clicks on + to add a new book to library */
addBookBtn.addEventListener("click", () => {
  form.style.visibility = "visible";
});

function addToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead); // var book contains the title, author, pages, and read properties of book
  library.push(book); // pushes each item to array
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false; // if it's a checkbox
  console.log("cleared");
}

function closeDialog(e) {
  if (!form.contains(e.target) && e.target !== addBookBtn) {
    form.style.visibility = "hidden";
  }
}
document.addEventListener("mousedown", closeDialog);

function removeBookFromLibrary(index) {
  library.splice(index, 1);
  displayBooks(); // re-render books after removal
}

function readToggle(index) {
  library[index].isRead = !library[index].isRead;
  displayBooks();
}

function displayBooks() {
  // Clears the container before displaying books
  container.innerHTML = "";
  // Loop through each book in the library
  library.forEach((book, index) => {
    let bookCard = document.createElement("div");
    console.log(bookCard);
    bookCard.classList.add("card");

    let titleText = document.createElement("h3");
    let authorText = document.createElement("p");
    let pageNum = document.createElement("p");
    let readStatus = document.createElement("button");
    readStatus.classList.add("read-btn");
    let removeBook = document.createElement("button");
    removeBook.classList.add("remove-btn");

    // Access the title, author, pages, read properties of each book, and remove book
    titleText.textContent = book.title;
    authorText.textContent = book.author;
    pageNum.textContent = `Pages: ${book.pages}`;
    // readStatus.textContent = book.isRead ? "Read" : "Not Read";
    if (book.isRead === true) {
      readStatus.textContent = "Read";
      readStatus.style.background = "#cee2c8";
    } else {
      readStatus.textContent = "Not Read";
      readStatus.style.background = "#f0e990";
    }

    readStatus.addEventListener("click", () => {
      readToggle(index);
    });

    // Removes one book from library
    removeBook.textContent = "Remove";
    console.log("removeBook: ", removeBook);
    removeBook.addEventListener("click", () => {
      removeBookFromLibrary(index);
    });

    bookCard.appendChild(titleText);
    bookCard.appendChild(authorText);
    bookCard.appendChild(pageNum);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeBook);

    container.appendChild(bookCard);
  });

  clearForm(); // clears form after
}

/* User submits form to container*/
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents reload of page

  // Check if any value is undefined
  if (!title.value || !author.value || !pages.value) {
    console.log("Please fill out all fields");
    return;
  }

  form.style.visibility = "hidden";

  addToLibrary(title.value, author.value, pages.value, read.checked);
  displayBooks();
});
