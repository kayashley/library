const dialog = document.querySelector(".dialog"); // selects dialog box
const bookBtn = document.querySelector(".book-btn"); // selects book button
const closeBtn = document.querySelector(".close-btn"); // selects close button
const cancelBtn = document.querySelector(".cancel-btn"); // selects cancel button

bookBtn.addEventListener("click", () => {
  dialog.showModal();

  const container = document.querySelector(".container"); // selects the container
  const bookCard = container.appendChild(document.createElement("div")); // creates each book card

  bookCard.classList.add("card");
  container.appendChild(bookCard);
});

function AddToLibrary() {}

/* BOOK BUTTON - user clicks the button to add a book */
bookBtn.addEventListener("click", () => {
  dialog.showModal();
});

/* CLOSE BUTTON - user clicks button to close dialog box */
closeBtn.addEventListener("click", () => {
  dialog.close();
  console.log("closed dialog");
});

/* CANCEL BUTTON - user clicks button to cancel their form */
cancelBtn.addEventListener("click", () => {
  dialog.close();
  console.log("cancelled");
});
