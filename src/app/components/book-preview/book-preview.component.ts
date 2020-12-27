import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookModel } from 'src/app/models/BookModel';
import { BookService } from 'src/app/services/book.service';
import { ShowImagComponent } from '../show-imag/show-imag.component';



@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {
  @Input() x;
  @Input() book :BookModel;
  @Output() toggleWishLst = new EventEmitter<BookModel>()
  
  constructor(
    private bookServ :BookService,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void { }

  
  


  get isInWishList(){
   return this.bookServ.existsInLst(this.book)
  }

  onShowImag(imagPath){
    this.dialog.open(ShowImagComponent,{
      data :{
        image_path : imagPath
      }
    });
    
    
    

  }

  

}
