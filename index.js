// document.addEventListener("DOMContentLoaded", function() {
//   const controller = new DomController
//   controller.init()
// });
const bookUL = document.querySelector('ul#list')
const showDiv = document.querySelector('div#show-panel')

function getBooks() {
  fetch('http://localhost:3000/books')
  .then(r => r.json())
  .then(books => books.forEach(book => displayBookName(book)))
}

function displayBookName(book) {
  const bookLI = document.createElement('li')
  bookLI.dataset.id = book.id

  bookLI.textContent = book.title

  bookUL.append(bookLI)
}

bookUL.addEventListener('click', function(e) {
  const bookId = e.target.dataset.id

  fetch(`http://localhost:3000/books/${bookId}`)
    .then(r => r.json())
    .then(displayBookDetails)
})

function displayBookDetails(book) {
  showDiv.innerHTML = ""
  const bookImg = document.createElement('img')
  bookImg.src = book.img_url
  const booktitle = document.createElement('h2')
  booktitle.textContent = book.title
  const bookDescription = document.createElement('p')
  bookDescription.textContent = book.description
  const usersUL = document.createElement('ul')
  const userLI = document.createElement('li')
  book.users.forEach(user => usersUL.append(userLI.textContent = user.username ))
  const likeBtn = document.createElement('button')
  likeBtn.textContent = "I like it!"

  showDiv.append(bookImg, booktitle, bookDescription, usersUL, likeBtn)
}


getBooks()