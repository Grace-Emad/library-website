function displayUserBooks(filteredBooks = null) {
  let allBooks = JSON.parse(localStorage.getItem("books")) || [];
  let booksToDisplay = filteredBooks || allBooks;
  let booksContainer = document.getElementById("booksContainer");
  if (!booksContainer) return;
  booksContainer.innerHTML = "";
  if (booksToDisplay.length === 0) {
    booksContainer.innerHTML = "<p>No books found.</p>";
    return;
  }

  booksToDisplay.forEach((book, index) => {
    booksContainer.innerHTML += `
      <div class="book-card" style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px;">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Category: ${book.category}</p>
        <button onclick="viewDetails(${index})">View Details</button>
      </div>
    `;
  });
}

function setupUserSearch() {
  const searchInput = document.getElementById("userSearchInput");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  let allBooks = JSON.parse(localStorage.getItem("books")) || [];
  const filtered = allBooks.filter(book => 
   book.title.toLowerCase().includes(searchTerm) ||
   book.author.toLowerCase().includes(searchTerm) ||
   book.category.toLowerCase().includes(searchTerm)
    );
   displayUserBooks(filtered);
  });
}

function viewDetails(index) {
  localStorage.setItem("selectedBookIndex", index);
  window.location.href = "book_details.html";
}


document.addEventListener("DOMContentLoaded", () => {
  displayUserBooks();
  setupUserSearch();
});
