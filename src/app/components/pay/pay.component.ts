import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
@Output() cancel : EventEmitter<any> = new EventEmitter();

frmPay : FormGroup;

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.createFrm();
  }


  oncancel(){
    this.cancel.emit(false)
  }

  createFrm(){
    this.frmPay = this.fb.group({
      name : [null,[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email:  [null,[Validators.required , Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      card :  [null,[Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
      cvv :  [null,[Validators.required ,Validators.maxLength(3)]],
      month:  [null,[Validators.required]]
    })
  }

  onPay(frm ){
    //save the info
   console.log(frm);
   if(!frm.invalid){
    alert('pay is succsses!')
    this.cancel.emit(false)
   }
   
  }

}
