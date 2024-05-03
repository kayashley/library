const form = document.querySelector(".book-form"); // selects dialog box
console.log(form);

const submitBtn = document.querySelector(".submit-btn"); // selects close button

const addBookBtn = document.querySelector(".add-btn"); // selects book button
const addForm = document.getElementById("add-form");
console.log(addForm);

addBookBtn.addEventListener("click", () => {
  form.style.visibility = "visible";

  const container = document.querySelector(".container"); // selects the container
  const bookCard = container.appendChild(document.createElement("div")); // creates each book card

  bookCard.classList.add("card");
  container.appendChild(bookCard);
});

const subContainer = document.createElement("div");
subContainer.classList.add("sub-container");

/* select each form input value */
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const checkRead = document.getElementById("read").checked;

function AddToLibrary() {}

/* BOOK BUTTON - user clicks the button to add a book */
addBookBtn.addEventListener("click", () => {
  // form.showModal();
});

/* SUBMIT BUTTON - user clicks button to close dialog box */
submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  form.close();
  console.log("closed dialog");
});
