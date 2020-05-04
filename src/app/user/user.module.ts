

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module'; 
import { UserService } from './user.service';
import { UserHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    UserRoutingModule
  ],
  providers: [UserService],
  declarations: [UserHomeComponent]
})
export class UserModule { }
