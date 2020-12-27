import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  pay 

  title = 'BooksWishlist';

  onPay(event){
  this.pay = event
  }
  
  oncancele(event){
    this.pay = event  
  }
}
