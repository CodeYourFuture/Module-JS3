let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true); // Corrected book title
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    author.value == null || // Check for author input
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked); // Passed author.value instead of title.value
    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  // Delete old table rows
  for (let n = rowsNumber - 1; n > 0; n--) { // Corrected the loop condition
    table.deleteRow(n);
  }
  // Insert updated rows and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;

    // Add read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    cell4.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "No" : "Yes"; // Corrected readStatus assignment
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add delete button
    let delButton = document.createElement("button");
    delButton.id = i + 5; // Corrected variable name from delBut to delButton
    cell5.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () { // Corrected event name from "clicks" to "click"
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
