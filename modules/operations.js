// Handle the operations required on a book
export class BookHandling {
  constructor(cBooks) {
    this.cBooks = cBooks;
    this.bookCount = 0;
    this.display();
  }

  display() {
    this.cBooks.forEach((e) => {
      this.bookCount = e.id;
      this.add(e.title, e.author);
    });
    updateBtns();
  }

  removeBooks(btn) {
    this.cBooks = this.cBooks.filter((element) => element.id !== +btn.id);
    localStorage.setItem('collectionOfBooks', JSON.stringify(this.cBooks));
    btn.parentElement.remove();
  }

  add(title, author) {
    const p = document.createElement('p');
    p.textContent = '"'.concat(title, '"', ' by ', author);
    const btn = document.createElement('button');
    btn.id = this.bookCount;
    btn.textContent = 'remove';

    const div = document.createElement('div');
    div.className = 'tag';
    div.append(p, btn);
    listBooks.appendChild(div);
  }

  setBookCount() {
    this.bookCount += 1;
  }

  getBookCount() {
    return this.bookCount;
  }
}