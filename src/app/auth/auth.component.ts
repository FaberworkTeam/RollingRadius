import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isOtpMode = false;
  isSignupMode = false;

  isLoading = false;
  otpMessage = '';

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    this.isOtpMode = this.isLoginMode ? false : true;
    this.isSignupMode = false;
  }

  onSubmit(form: NgForm){

    if(!form.valid){
      return;
    }

    this.isLoading = true;
    if(this.isLoginMode){
      console.log('loginMode submit');


    }else if(this.isOtpMode){
      console.log('OtpMode submit');

      this.otpMessage = '000 otp has been sent to your phone';
      this.isSignupMode = true;
      this.isOtpMode = false;
    
    }else if(this.isSignupMode){
      console.log('RegisterMode submit');
    
      
    }
    
    this.isLoading = false;
    form.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
