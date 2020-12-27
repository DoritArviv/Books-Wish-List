import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookCaruselComponent } from './components/book-carusel/book-carusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowImagComponent } from './components/show-imag/show-imag.component';
import { PayComponent } from './components/pay/pay.component';
//
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    BookPreviewComponent,
    BookCaruselComponent,
    ShowImagComponent,
    PayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
   
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
