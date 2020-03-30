'use strict'


function onInit() {
    createBooks()
    renderBooks()
}




function renderBooks() {
    var books = getBooks()
    var strHTML = books.map(function (book) {
        return `<tr><td>${book.id}</td> <td>${book.bookName}</td>
        <td><img src="bookimgs/${book.bookImage}"></td> 
        <td>${book.bookPrice}</td>
            <td><button onclick="onRead('${book.bookName}')">Read </button> </td>
            <td><button onclick="onUpdate('${book.bookName}, ${book.bookPrice},${book.bookImage}, ${book.id}')">Update</button></td>
            <td><button onclick = "onDeleteBook('${book.id}')">Delete</button></td>
            </tr>`
    }

    )
    document.querySelector('tbody').innerHTML = strHTML.join('')

}



function onRead(book) {
    document.querySelector('[name="read"]').classList.toggle('hide')
    document.querySelector('[name="read"] h1').innerText = book
}



function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
}


function oncloseRead() {
    document.querySelector('[name="read"]').classList.toggle('hide')
}


function onUpdate(bookValues) {
    var updateModal = document.querySelector('[name="updateModal"]')
    updateModal.classList.toggle('hide')
    var booksVals = bookValues.split(',');

    showCurrBookValues(booksVals)

}