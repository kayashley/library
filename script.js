const container = document.querySelector(".container");
const form = document.querySelector(".book-form"); // selects dialog box
const main = document.querySelector(".main");

const submitBtn = document.querySelector(".submit-btn"); // selects close button
const addBookBtn = document.querySelector(".add-btn"); // selects book button
const addForm = document.getElementById("add-form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

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
  let book = new Book(title, author, pages, isRead);
  library.push(book);
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false; // if it's a checkbox
  console.log("cleared");
}

function displayBooks() {
  // Clears the container before displaying books
  container.innerHTML = "";
  // Loop through each book in the library
  library.forEach((book) => {
    let bookCard = document.createElement("div");
    console.log(bookCard);
    bookCard.classList.add("card");

    let titleText = document.createElement("h3");
    let authorText = document.createElement("p");
    let pageNum = document.createElement("p");
    let readStatus = document.createElement("button");

    // Access the title, author, pages, and read properties of each book
    titleText.textContent = book.title;
    authorText.textContent = book.author;
    pageNum.textContent = `Pages: ${book.pages}`;
    readStatus.textContent = book.isRead ? "Read" : "Not Read";

    bookCard.appendChild(titleText);
    bookCard.appendChild(authorText);
    bookCard.appendChild(pageNum);
    bookCard.appendChild(readStatus);

    container.appendChild(bookCard);
  });

  clearForm();
}

/*  */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents reload of page

  // add book info
  console.log("Title:", title.value);
  console.log("Author:", author.value);
  console.log("Pages:", pages.value);
  console.log("Read:", read.checked);

  // Check if any value is undefined
  if (!title.value || !author.value || !pages.value) {
    console.log("Please fill out all fields");
    return;
  }

  form.style.visibility = "hidden";
  console.log("closed dialog");

  addToLibrary(title.value, author.value, pages.value, read.checked);
  displayBooks();
});
