import { Component } from '@angular/core';

interface Book{
  Name: string;
Author: string;
image: string;
amount: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
   


books: Book[] = [
  {
  Name:  'clean code',
  Author:  'Rebort C Martin',
  image:   "https://m.media-amazon.com/images/I/61DiOXBOq4L._AC_UY327_FMwebp_QL65_.jpg",
  amount: 700,
  },
  {
    Name :'The pragmatic programmer',
    Author :'David Thomas',
    image:  "https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?size=626&ext=jpg",   
    amount: 800,
  }
]





}





