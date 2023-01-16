import time from './modules/dateTime.js';
import BookShelf from './modules/bookshelf.js';

const currentFormTitle = document.querySelector('#title');
const currentFormAuthor = document.querySelector('#author');
const currentFormBookAddButton = document.querySelector('#book-add-button');
const linkAdd = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const books = document.querySelector('.book-shelf');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

const awesomeBookShelf = new BookShelf();

currentFormBookAddButton.addEventListener('click', () => {
  const title = currentFormTitle.value;
  const author = currentFormAuthor.value;
  awesomeBookShelf.addBook(title, author);
  awesomeBookShelf.saveDataToLocalStorage();
});

linkList.addEventListener('click', () => {
  books.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
});

linkAdd.addEventListener('click', () => {
  books.classList.add('hide');
  form.classList.remove('hide');
  contact.classList.add('hide');
});

linkContact.addEventListener('click', () => {
  books.classList.add('hide');
  form.classList.add('hide');
  contact.classList.remove('hide');
});

window.onload = () => {
  books.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
  awesomeBookShelf.loadDataFromLocalStorage();
  time();
};