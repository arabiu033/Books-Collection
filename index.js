import {
  listBooks, books, bookAuthor, bookTitle, addBtn,
} from './modules/variables.js';
import './modules/interface.js';
import './modules/date.js';

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
