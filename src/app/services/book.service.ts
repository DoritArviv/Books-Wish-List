import { Injectable } from '@angular/core';
import { BookModel } from '../models/BookModel';
import {BOOKS} from '../services/bookData'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  _book :BookModel[] = BOOKS;
  private _currentBook$ = new BehaviorSubject<BookModel>(this._book[0]);
  public currentBook$ = this._currentBook$.asObservable();

  private _wishLst = new BehaviorSubject<BookModel[]>([])
  public wishList$ = this._wishLst.asObservable();

  currIndex = 0;
  imagIndex = 0;

  //coute the bookes arry 
  getNextBook(i : number ){
    this.currIndex = this.currIndex + i;
    this.currIndex = (this.currIndex + this._book.length) % this._book.length
    this._currentBook$.next(this._book[this.currIndex]);
  }


  //return object  - get the current value
  existsInLst(currBook : BookModel){
    return this._wishLst.getValue().some(curr => curr.title === currBook.title)
  }

  toggleList(book, title = null){
    if(book && this.existsInLst(book)){
      this._wishLst.next(this._wishLst.getValue().filter(
        curr=>{
          return curr.title !== book.title
        }
      ))
    }
    else
      if(title){
        this._wishLst.next(this._wishLst.getValue().filter(curr => {
          return curr.title !== title;
        }))
      } else {
        this._wishLst.next([...this._wishLst.getValue(), book])
      }
    }
  
 

}
