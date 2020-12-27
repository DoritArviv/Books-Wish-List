import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-imag',
  templateUrl: './show-imag.component.html',
  styles: ['./show-imag.component.css']
})
export class ShowImagComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
