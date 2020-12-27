import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-carusel',
  templateUrl: './book-carusel.component.html',
  styleUrls: ['./book-carusel.component.css']
})
export class BookCaruselComponent implements OnInit {
book$;
Math : Math;
insexNum =0;

  constructor( private bookServ :BookService) { }

  ngOnInit(): void {
    this.book$= this.bookServ.currentBook$
    
    
  }

  toggelWishLst(book){
    this.bookServ.toggleList(book)
  }


  onGetNextBook(i){
    this.insexNum = i;
    this.bookServ.getNextBook(i)

  }
}
