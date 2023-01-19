import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FORM';
  
  ismarried = false;
  private formSubmitAttempt !: boolean;
 @ViewChild('contactForm') contactform! : NgForm ;
   
  ngOnInit(){

  }
  signUp(){
    // console.log(this.contactform.value);
    // this.contactform.reset();
    this.formSubmitAttempt = true;
    if (this.contactform.valid) {
      console.log('form submitted');
      console.log(this.contactform.value);
    }
  }
  reset() {
    this.contactform.reset();
    this.formSubmitAttempt = false;
  }
}
 