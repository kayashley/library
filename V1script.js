let dialog = document.querySelector(".dialog"); // selects dialog box
let shelves = document.querySelector(".container"); // selects container box
let bookBtn = document.querySelector(".book-btn"); // selects book button
let closeBtn = document.querySelector(".close-btn"); // selects close button
let cancelBtn = document.querySelector(".cancel-btn"); // selects cancel button

const library = [
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    pages: 528,
    read: true,
  },
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    pages: 640,
    read: true,
  },
  {
    title: "Caraval",
    author: "Stephanie Garber",
    pages: 416,
    read: true,
  },
];

/* maps through each array item,
passes it through Book function */
let books = library.map(Book);

/* creates each array item into its own "card" div
containing book information: 
    - title
    - author
    - pages
    - read(t/f)
*/
function Book(b) {
  let container = document.querySelector(".container");
  let bookCard = container.appendChild(document.createElement("div"));
  bookCard.classList.add("card");

  document.body.appendChild(container);

  for (let i = 0; i < library.length; i++) {
    // passes book info to book cards
    bookCard.innerHTML = `Title: ${b.title} Author: ${b.author} Pages: ${b.pages} Read: ${b.read}`;
    bookCard.classList.add("card-info");

    console.log(b);
  }

  return b;
}

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
