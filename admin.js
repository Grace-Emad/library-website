
if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify([]));
}


// =======================
// ADD BOOK
// =======================
let addForm = document.getElementById("addBookForm");

if (addForm) {
    addForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.querySelector('[name="bookName"]').value;
        let author = document.querySelector('[name="author"]').value;
        let category = document.querySelector('[name="category"]').value;
        let description = document.querySelector('[name="description"]').value;

        let books = JSON.parse(localStorage.getItem("books"));

        let newBook = {
            id: Date.now(),
            title: name,
            author: author,
            category: category,
            description: description,
            status: "available"
        };

        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));

        alert("Book added successfully ✅");
        addForm.reset();
    });
}


// =======================
// EDIT BOOK
// =======================
let editForm = document.getElementById("editBookForm");

if (editForm) {
    editForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let id = document.querySelector('[name="bookID"]').value;

        let books = JSON.parse(localStorage.getItem("books"));

        let book = books.find(b => b.id == id);

        if (!book) {
            alert("Book not found ❌");
            return;
        }

        let newName = document.querySelector('[name="bookName"]').value;
        let newAuthor = document.querySelector('[name="author"]').value;
        let newCategory = document.querySelector('[name="category"]').value;
        let newDesc = document.querySelector('[name="description"]').value;

        if (newName) book.title = newName;
        if (newAuthor) book.author = newAuthor;
        if (newCategory) book.category = newCategory;
        if (newDesc) book.description = newDesc;

        localStorage.setItem("books", JSON.stringify(books));

        alert("Book updated successfully ✏️");
    });
}


function displayAdminBooks() {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  books.forEach((book, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>

        <td>
          <button onclick="deleteBook(${index})">Delete</button>
          <button onclick="editBook(${index})">Edit</button>
        </td>
      </tr>
    `;
  });
}

function deleteBook(index) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.splice(index, 1); 
  localStorage.setItem("books", JSON.stringify(books));
 displayAdminBooks(); 
}
function editBook(index) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let book = books[index];
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("category").value = book.category;
  localStorage.setItem("editIndex", index);
}
function saveEdit() {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let index = parseInt(localStorage.getItem("editIndex"));
  books[index].title = document.getElementById("title").value;
  books[index].author = document.getElementById("author").value;
  books[index].category = document.getElementById("category").value;
  localStorage.setItem("books", JSON.stringify(books));
  displayAdminBooks();
}

displayAdminBooks();
