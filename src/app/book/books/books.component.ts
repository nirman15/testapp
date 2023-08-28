import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from 'src/app/types/Book';

@Component({
  selector: 'app-book',
  template: './book.component.html',
  styleUrls: ['./books.component.scss'], 
})
export class BookComponent {  // Corrected class name
  @Input() books: book = {} as book;
  @Output() bookEmitter = new EventEmitter<book>();

  constructor() {}

  addToCard() {  // Corrected method name
    this.bookEmitter.emit(this.books);
  }
}
