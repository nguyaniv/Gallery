'use strict'


function onInit() {
    createBooks();

    renderBooks();

}




function renderBooks() {
    var books = getBooks()
    var strHTML = books.map(function (book) {
        return `<tr><td>${book.id}</td> <td>${book.bookName}</td>
        <td class = "img-bgc"><img src="${book.bookImage}"></td> 
        <td>${book.bookPrice} <span data-trans="priceSymbol">$</span></td>
            <td><button class="btn btn-dark " data-trans="read" onclick="onRead('${book.id}')">Read </button> </td>
            <td><button class="btn btn-secondary" data-trans="update" onclick="onUpdate('${book.bookName}, ${book.bookPrice},${book.bookImage}, ${book.id}')">Update</button></td>
            <td><button class="btn btn-danger" data-trans="delete" onclick = "onDeleteBook('${book.id}')">Delete</button></td>
            </tr>`
    }

    )
    document.querySelector('tbody').innerHTML = strHTML.join('')
    doTrans();
}



function onRead(bookId) {
    var book = gBooks.find(foundBook => foundBook.id === bookId)

    document.querySelector('[name="read"]').classList.toggle('hide')
    document.querySelector('[name="read"] h1').innerText = book.bookName
    document.querySelector('.dynamic-image').innerHTML = `<img src = "${book.bookImage}"></img>`
    document.querySelector('.rate-value').innerText = book.rate
    document.querySelector('[name = "bookId"]').innerText = book.id

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


function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    doTrans();
    renderBooks();
}


function onNextPage() {
    nextPage();
    renderBooks();
}

function onLastPage(){
    lastPage();
    renderBooks();
}