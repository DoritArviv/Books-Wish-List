import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookModel } from 'src/app/models/BookModel';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit , OnDestroy {
  books :BookModel[];
  sub : Subscription = null;
 
  @Output() pay :EventEmitter<any> = new EventEmitter();

  // let totalPrice : number = 0;


  constructor( private bookServ : BookService) { }

  ngOnInit(): void {
 this.sub = this.bookServ.wishList$.subscribe(books=>{
    this.books = books
  })
  }

  totalPrice(books) :number{
   let totalPrice : number = 0;
    for(let i =0; i < books.length; i++){
      totalPrice += books[i].price
    }
   return +totalPrice.toFixed(2);
  }

  onRemove(title){
    this.bookServ.toggleList(null,title)
  }
  ngOnDestroy(){
      if(this.sub !==null)
      this.sub.unsubscribe();
  }
  onPay(){
    this.pay.emit(true);

    
  }

}
