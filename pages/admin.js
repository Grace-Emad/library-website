
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
