/* eslint-disable max-classes-per-file */
import { Book, Store, showBooks } from './modules/class.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

const showBookList = document.getElementById('nav-list');
const showAddBook = document.getElementById('nav-add');
const showContact = document.getElementById('nav-contact');

function showList() {
  document.getElementById('book-list').style.display = 'flex';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}
function showAdd() {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
}
function showContactPage() {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'flex';
}

window.addEventListener('load', () => {
  showList();
});
showBookList.addEventListener('click', () => {
  showList();
});
showAddBook.addEventListener('click', () => {
  showAdd();
});
showContact.addEventListener('click', () => {
  showContactPage();
});

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  showBooks.addBookToList(book);
  Store.addBook(book);
  showBooks.clearFields();
});

document.querySelector('#list').addEventListener('click', (e) => {
  showBooks.deleteBook(e.target);

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);

// const date = new Date();
// document.getElementById('date').innerHTML = date;
