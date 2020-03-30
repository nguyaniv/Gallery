'use strict'
var gBooks = []
var gBooksSamples = ['The_History_Of_Tomarrow', 'The_Quarantine']
const KEY = 'books'


function createBooks() {
    var books = loadFromStorage(KEY)
    console.log(books);

    if (!books || !books.length) {
        books = []

        for (var i = 0; i < 4; i++) {
            var bookSample = gBooksSamples[getRandomIntInclusive(0, gBooksSamples.length - 1)]
            var book = _createBook(bookSample, getRandomIntInclusive(5, 30))
            book.i = i;
            books.push(book)
        }
    }
    gBooks = books
    _saveBooksToStorage();
}


function getBooks() {
    return gBooks
}

function _createBook(name, price, img) {

    return {
        id: makeId(),
        bookName: name,
        bookPrice: price,
        bookImage: name + '.jpg'
        // desc: makeLorem()
    }
}


function addBookFromUser() {
    var bookName = document.querySelector('[name="bookName"]').value
    var bookPrice = document.querySelector('[name="bookPrice"]').value
    var bookImage = document.querySelector('[name="imgURL"]').value
    console.log(bookName, bookPrice);

    var book = _createBook(bookName, bookPrice, bookImage)
    gBooks.push(book)

    renderBooks();

    bookName.value;
    bookPrice.value;
    bookImage.value;

    _saveBooksToStorage()
}



function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}



function showToUserInput(btn) {
    btn.innerText === 'add new book' ? btn.innerText = 'hide input' : btn.innerText = 'add new book'
    document.querySelector('[name="name-price-image-forms"]').classList.toggle('hide');
}




function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();

}




function showCurrBookValues(booksVals) {
    var bookNameInput = document.querySelector('[name="book-name"]').value = booksVals[0]
    var bookPriceInput = document.querySelector('[name="book-price"]').value = Number(booksVals[1])
    var bookImgInput = document.querySelector('[name="book-img"]').value = booksVals[2]
    var bookIdInput = document.querySelector('[name="book-id"]').value = booksVals[3]
}






function updateModal() {
    var bookNameInput = document.querySelector('[name="book-name"]')
    var bookPriceInput = document.querySelector('[name="book-price"]')
    var bookImgInput = document.querySelector('[name="book-img"]')
    var bookIdInput = document.querySelector('[name="book-id"]')

    console.log(bookIdInput.value);
    var bookToUpdate = gBooks.find(function (book) {
        return ' ' + book.id === bookIdInput.value
    })
    bookToUpdate.bookName = bookNameInput.value
    bookToUpdate.bookPrice = bookPriceInput.value
    bookToUpdate.bookImage = bookImgInput.value
    renderBooks()
}


function hideModal() {
    var updateModal = document.querySelector('[name="updateModal"]')
    updateModal.classList.toggle('hide')
}
