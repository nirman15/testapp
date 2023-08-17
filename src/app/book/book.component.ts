import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  Name: string = 'clean code';
  Author: string = 'Rebort C Martin';
  src: string = "https://m.media-amazon.com/images/I/61DiOXBOq4L._AC_UY327_FMwebp_QL65_.jpg";

  Name2 : string  ='The pragmatic programmer';
  Author2 : string= 'David Thomas';
  src2: string = "https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?size=626&ext=jpg";


isShowing: boolean = true;

ngOnInit(): void{}






}





