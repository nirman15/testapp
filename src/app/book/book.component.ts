import { Component } from '@angular/core';
import { book } from '../types/Book';











@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})





export class BookComponent  {
  books : book[] =  [
    {
      name: 'clean code',
      author:  'Rebort C Martin',
      image:  "https://m.media-amazon.com/images/I/61DiOXBOq4L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 499,

    }, 
    {
      name : 'The pragmatic programmer',
  author :  'David Thomas',
  image:  "https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?size=626&ext=jpg",
  amount:599,

    }, 
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      image: "https://cdn.kobo.com/book-images/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/1200/1200/False/rich-dad-poor-dad-24.jpg",
      amount:699,

    },
    {
      name: 'Atomic Habits',
      author: 'James Clear',
      image: "https://jamesclear.com/wp-content/uploads/2019/02/atomic-habits_gallery_hi-res_04.jpg",
      amount:799,

    },
  ];




card: book[] = [];
  

isShowing: boolean = false;


}





