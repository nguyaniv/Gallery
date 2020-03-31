'use strict'
var gBooks = []
var gBooksSamples = ['The_History_Of_Tomarrow', 'The_Quarantine']
const KEY = 'books'
const PAGE_SIZE = 4;
var gPageIdx = 0;


function createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []

        for (var i = 0; i < 4; i++) {
            var bookSample = gBooksSamples[getRandomIntInclusive(0, gBooksSamples.length - 1)]
            var book = _createBook(bookSample, getRandomIntInclusive(5, 30))
            book.bookImage = 'bookimgs/'+book.bookName +'.jpg';
            books.push(book)
        }
    }
    gBooks = books
    _saveBooksToStorage();
}


function getBooks() {
    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
    
}

function _createBook(name, price, img) {

    return {
        id: makeId(),
        bookName: name,
        bookPrice: price,
        bookImage: img,
        rate: 0
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



function onChangeRate(value){
    var rate =  document.querySelector('.rate-value')
   var bookId =  document.querySelector('[name = "bookId"]').innerText

   var currBook = gBooks.find(book => book.id === bookId) 

        if(currBook.rate + value > 10 || currBook.rate + value < 0 )  return
     
        currBook.rate += value
     
      rate.innerText = currBook.rate
      _saveBooksToStorage()
  }




  function nextPage() {
  
    if (gPageIdx < 3) gPageIdx++;
    else gPageIdx = 0;
}


function lastPage() {
  
    if (gPageIdx > 1) gPageIdx--;
    else gPageIdx = 0;
}