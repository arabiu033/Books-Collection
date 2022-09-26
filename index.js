import {
  bookAuthor, bookTitle, addBtn,
} from './modules/variables.js';
import './modules/date.js';
import './modules/interface.js';
import { BookHandling } from './modules/operations.js';

let books;
if (localStorage.getItem('collectionOfBooks')) {
  books = new BookHandling(JSON.parse(localStorage.getItem('collectionOfBooks') || '[]'));
} else {
  books = new BookHandling([]);
}

addBtn.addEventListener('click', () => {
  books.setBookCount();
  if (!bookTitle.value || !bookAuthor.value) {
    return;
  }

  books.add(bookTitle.value, bookAuthor.value);
  books.cBooks.push({ id: books.getBookCount(), title: bookTitle.value, author: bookAuthor.value });
  localStorage.setItem('collectionOfBooks', JSON.stringify(books.cBooks));
  books.updateBtns();
  bookAuthor.value = '';
  bookTitle.value = '';
});
